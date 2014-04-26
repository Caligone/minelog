/**
 * APIController
 */

// TOOLS
var APIVersion = '1.0';

// Check the server from the key field
var checkServer = function(req, res, key, callback) {
  Server.find({ key: key }).exec(function(err, servers) {
    // Handle errors
    if (err) { return res.send(err, 500); }

    // Server not found
    if(servers.length == 0) {
      res.json({ status: -1, message: "Server not found" });
    }
    // Server unicity trouble
    else if(servers.length > 1) {
        res.json({ status: -1, message: "Server unicity trouble" });
    }
    // Server(s) found
    else {
      var server = servers[0];
      server.lastHeartBeat = new Date().toISOString();
      server.active = true;
      server.online = true;
      server.save(function(err) {
        callback(req, res, server);
      });
    }
  });
};

// Check the player from the pseudo field
var checkPlayer = function(req, res, pseudo, server, callback) {
  Player.find({ pseudo: pseudo }).populate('servers').populate('stats').exec(function(err, players) {
    // "Handle" problems
    if (err) { return res.send(err, 500); }

    // Player does not exist and need to be create
    if(players.length <= 0) {
      Player.create({ pseudo: pseudo }).exec(function(err, player) {
        if(err) {
          res.json({ status: -1, message: "Player could not be create", err: err });
        }
        else {
          player.servers.add(server.id);
          player.save(function() {
            PlayerStat.create({player: player.id, server: server.id}).exec(function(err, stat) {
              checkPlayer(req, res, pseudo, server, callback);
            });
          });
        }
      });
    }
    else {
      // Multiple players found (???)
      if(players.length != 1) {
        res.json({ status: -1, message: "Player unicity trouble" });
      }
      // Update Player
      else {
        var player = players[0];

        // Check if the player already played on this server (player have server)
        var insertServer = true;
        for (var i = player.servers.length - 1; i >= 0 && insertServer ; i--) {
          if(player.servers[i].id === server.id) {
            insertServer = false;
          }
        };
        if(insertServer) {
          player.servers.add(server.id);
        }
        player.lastLogin = new Date().toISOString();
        player.save(function(err)
        {
          if(err) {
            res.json({ status: -1, message: "Player could not be updated", err: err });
          }
          else {
            // Create PlayerStats if necessary
            if(insertServer) {
              PlayerStat.create({player: player.id, server: server.id}).exec(function(err, stat) {
                callback(req, res, player);
              });
            }
            else {
              callback(req, res, player);
            }
          }
        });
      }
    }
  });
};

module.exports = {

  // Handle a plugin connection
  connect: function(req, res) {
    checkServer(req, res, req.query.key, function(req, res, server) {
        // Update server information
        if(req.query.name) {
          server.name = req.query.name;
        }
        if(req.query.address) {
          server.address = req.query.address;
        }
        if(req.query.version) {
          server.version = req.query.version;
        }
        if(req.query.size) {
          server.size = req.query.size;
        }
        server.online = true;
        server.onlinePlayers = 0;
        server.save(function(err) {
          if(err) {
            res.json({ status: -1, message: "Server could not be updated", err: err, apiversion: APIVersion });
          }
          else {
            res.json({ status: 0, message: "Server found", server: server, apiversion: APIVersion });
          }
          DashboardService.getTopServers(function(data) {
            sails.sockets.broadcast('topServersDashboardRoom', 'topServersDashboardUpdate', data);
          });
          ServersService.getServers(function(data) {
            sails.sockets.broadcast('serversListRoom', 'serversListUpdate', data);
          });
        })
      });
  },

  // Handle a plugin disconnection
  disconnect: function(req, res) {
    checkServer(req, res, req.query.key, function(req, res, server) {
      server.online = false;
      server.onlinePlayers = 0;
      server.save(function(err) {
        if(err) {
          res.json({ status: -1, message: "Server could not be updated", err: err });
        }
        else {
          res.json({ status: 0, message: "Server found", server: server });
        }
        DashboardService.getTopServers(function(data) {
          sails.sockets.broadcast('topServersDashboardRoom', 'topServersDashboardUpdate', data);
        });
        ServersService.getServers(function(data) {
          sails.sockets.broadcast('serversListRoom', 'serversListUpdate', data);
        });
        PlayersService.getPlayers(function(data) {
          sails.sockets.broadcast('playersListRoom', 'playersListUpdate', data);
        });
      })
    });
  },

  // Handle Heartbeat
  heartbeat: function(req, res) {
    checkServer(req, res, req.query.key, function(req, res, server){
      res.json({ status: 0, message: "Server heartbeat updated", server: server });
    })
  },

  // Handle playerConnect
  playerconnect: function(req, res) {
    checkServer(req, res, req.query.key, function(req, res, server) {
      server.onlinePlayers = (++server.onlinePlayers > server.size ? server.size : server.onlinePlayers);
      server.save(function(err) {
        checkPlayer(req, res, req.query.pseudo, server, function(req, res, player) {
          player.online = true;
          player.save(function(err) {
            if(err) {
              res.json({ status: -1, message: "Player could not be updated", err: err });
            }
            else {
              res.json({ status: 0, message: "Player updated", player: player });
            }
            DashboardService.getTopPlayers(function(data) {
              sails.sockets.broadcast('topPlayersDashboardRoom', 'topPlayersDashboardUpdate', data);
            });
            DashboardService.getTopServers(function(data) {
              sails.sockets.broadcast('topServersDashboardRoom', 'topServersDashboardUpdate', data);
            });
            ServersService.getServers(function(data) {
              sails.sockets.broadcast('serversListRoom', 'serversListUpdate', data);
            });
            PlayersService.getPlayers(function(data) {
              sails.sockets.broadcast('playersListRoom', 'playersListUpdate', data);
            });
          })
        })
      })
    })
  },

  // Handle playerDisconnect
  playerdisconnect: function(req, res) {
    checkServer(req, res, req.query.key, function(req, res, server) {
      server.onlinePlayers = (--server.onlinePlayers < 0 ? 0 : server.onlinePlayers);
      server.save(function(err) {
        checkPlayer(req, res, req.query.pseudo, server, function(req, res, player) {
          player.online = false;
          player.save(function(err) {
            if(err) {
              res.json({ status: -1, message: "Player could not be updated", err: err });
            }
            else {
              for(statKey in player.stats) {
                if(player.stats[statKey].server !== undefined && player.stats[statKey].server !== server.id) {
                  console.log("Remove "+player.stats[statKey].server);
                  player.stats.remove(player.stats[statKey].id);
                }
              }
              res.json({ status: 0, message: "Player updated", player: player });
            }
            DashboardService.getTopPlayers(function(data) {
              sails.sockets.broadcast('topPlayersDashboardRoom', 'topPlayersDashboardUpdate', data);
            });
            DashboardService.getTopServers(function(data) {
              sails.sockets.broadcast('topServersDashboardRoom', 'topServersDashboardUpdate', data);
            });
            ServersService.getServers(function(data) {
              sails.sockets.broadcast('serversListRoom', 'serversListUpdate', data);
            });
            PlayersService.getPlayers(function(data) {
              sails.sockets.broadcast('playersListRoom', 'playersListUpdate', data);
            });
          })
        })
      })
    })
  },

  playerkilled: function(req, res) {
    checkServer(req, res, req.query.key, function(req, res, server) {
      checkPlayer(req, res, req.query.killer, server, function(req, res, killer) {
        checkPlayer(req, res, req.query.killed, server, function(req, res, killed) {
          Kill.create({killed: killed.id, killer: killer.id, server: server.id, weapon: req.query.weapon}).exec(function(err, kill) {
            if(err) {
              res.json({ status: -1, message: "Kill could not be created", err: err });
            }
            else {
              res.json({ status: 0, message: "Kill added", kill: kill });
              DashboardService.getGlobalData(function(data) {
                sails.sockets.broadcast('globalDashboardRoom', 'globalDashboardUpdate', data);
              });
              DashboardService.getTopPlayers(function(data) {
                sails.sockets.broadcast('topPlayersDashboardRoom', 'topPlayersDashboardUpdate', data);
              });
              PlayersService.getPlayers(function(data) {
                sails.sockets.broadcast('playersListRoom', 'playersListUpdate', data);
              });
            }
          });
        });
      });
    });
  },

  updatePlayer: function(req, res) {
    checkServer(req, res, req.query.key, function(req, res, server) {
      checkPlayer(req, res, req.query.pseudo, server, function(req, res, player) {
        var stats = null;
        for (var i = player.stats.length - 1; i >= 0; i--) {
          if(player.stats[i].server === server.id) {
            stats = player.stats[i];
          }
        };
        if(req.query.verbosity) {
          stats.verbosity += Number(req.query.verbosity);
        }
        if(req.query.blocksBroken) {
          stats.blocksBroken += Number(req.query.blocksBroken);
        }
        if(req.query.blocksPlaced) {
          stats.blocksPlaced += Number(req.query.blocksPlaced);
        }
        if(req.query.stupidDeaths) {
          stats.stupidDeaths += Number(req.query.stupidDeaths);
        }
        if(req.query.level && stats.level < req.query.level) {
          stats.level = Number(req.query.level);
        }

        stats.save(function(err) {
          if(err) {
            res.json({ status: -1, message: "Player could not be updated", err: err });
          }
          else {
            res.json({ status: 0, message: "Player updated", player: player });
          }
          DashboardService.getGlobalData(function(data) {
            sails.sockets.broadcast('globalDashboardRoom', 'globalDashboardUpdate', data);
          });
          DashboardService.getTopPlayers(function(data) {
            sails.sockets.broadcast('topPlayersDashboardRoom', 'topPlayersDashboardUpdate', data);
          });
          PlayersService.getPlayers(function(data) {
            sails.sockets.broadcast('playersListRoom', 'playersListUpdate', data);
          });
        });
      });
    });
  },

  // Handle getplayer
  player: function(req, res) {
    checkServer(req, res, req.query.key, function(req, res, server) {
      checkPlayer(req, res, req.query.pseudo, server, function(req, res, player) {
        res.json({ status: 0, message: "Player updated", player: player });
      })
    })
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
