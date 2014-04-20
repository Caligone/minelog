/**
 * APIController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
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
  User.find({ pseudo: pseudo }).populate('servers').populate('stats').exec(function(err, users) {
    // "Handle" problems
    if (err) { return res.send(err, 500); }

    // User does not exist and need to be create
    if(users.length <= 0) {
      User.create({ pseudo: pseudo }).exec(function(err, user) {
        if(err) {
          res.json({ status: -1, message: "User could not be create", err: err });
        }
        else {
          user.servers.add(server.id);
          user.save(function() {
            UserStat.create({user: user.id, server: server.id}).exec(function(err, stat) {
              checkPlayer(req, res, pseudo, server, callback);
            });
          });
        }
      });
    }
    else {
      // Multiple users found (???)
      if(users.length != 1) {
        res.json({ status: -1, message: "User unicity trouble" });
      }
      // Update User
      else {
        var user = users[0];

        // Check if the player already played on this server (user have server)
        var insertServer = true;
        for (var i = user.servers.length - 1; i >= 0 && insertServer ; i--) {
          if(user.servers[i].id === server.id) {
            insertServer = false;
          }
        };
        if(insertServer) {
          user.servers.add(server.id);
        }
        user.lastLogin = new Date().toISOString();
        user.save(function(err)
        {
          if(err) {
            res.json({ status: -1, message: "User could not be updated", err: err });
          }
          else {
            // Create UserStats if necessary
            if(insertServer) {
              UserStat.create({user: user.id, server: server.id}).exec(function(err, stat) {
                callback(req, res, user);
              });
            }
            else {
              callback(req, res, user);
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
        checkPlayer(req, res, req.query.pseudo, server, function(req, res, user) {
          user.online = true;
          user.save(function(err) {
            if(err) {
              res.json({ status: -1, message: "User could not be updated", err: err });
            }
            else {
              res.json({ status: 0, message: "User updated", user: user });
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
        checkPlayer(req, res, req.query.pseudo, server, function(req, res, user) {
          user.online = false;
          user.save(function(err) {
            if(err) {
              res.json({ status: -1, message: "User could not be updated", err: err });
            }
            else {
              for(statKey in user.stats) {
                if(user.stats[statKey].server !== undefined && user.stats[statKey].server !== server.id) {
                  console.log("Remove "+user.stats[statKey].server);
                  user.stats.remove(user.stats[statKey].id);
                }
              }
              res.json({ status: 0, message: "User updated", user: user });
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
              var stats = null;
              for (var i = killer.stats.length - 1; i >= 0; i--) {
                if(killer.stats[i].server === server.id) {
                  stats = killer.stats[i];
                }
              };
              stats.kills++;
              stats.ratio = stats.kills/(stats.pvpDeaths === 0 ? 1 : stats.pvpDeaths);
              stats.save();
              stats = null;
              for (var i = killed.stats.length - 1; i >= 0; i--) {
                if(killed.stats[i].server === server.id) {
                  stats = killed.stats[i];
                }
              };
              stats.pvpDeaths++;
              stats.ratio = stats.kills/(stats.pvpDeaths === 0 ? 1 : stats.pvpDeaths);
              stats.save();
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
      checkPlayer(req, res, req.query.pseudo, server, function(req, res, user) {
        var stats = null;
        for (var i = user.stats.length - 1; i >= 0; i--) {
          if(user.stats[i].server === server.id) {
            stats = user.stats[i];
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
            res.json({ status: -1, message: "User could not be updated", err: err });
          }
          else {
            res.json({ status: 0, message: "User updated", user: user });
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
      checkPlayer(req, res, req.query.pseudo, server, function(req, res, user) {
        res.json({ status: 0, message: "User updated", user: user });
      })
    })
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
