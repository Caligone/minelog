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

// Check the server from the key field
var checkServer = function(req, res, key, callback) {
  Server.find({ key: key }).done(function(err, servers) {
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
      server.save(function(err) {
        callback(req, res, server);
      });
    }
  });
};

// Check the player from the pseudo field
var checkPlayer = function(req, res, pseudo, server, callback) {
  User.find({ pseudo: pseudo }).populate('servers').populate('stats').done(function(err, users) {
    // "Handle" problems
    if (err) { return res.send(err, 500); }

    // User does not exist and need to be create
    if(users.length <= 0) {
      User.create({ pseudo: pseudo }).done(function(err, user) {
        if(err) {
          res.json({ status: -1, errorMessage: "User could not be create", err: err });
        }
        else {
          user.servers.add(server.id);
          user.save(function() {
            UserStat.create({user: user.id, server: server.id}).done(function(err, stat) {
              User.publishCreate(user);
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
            res.json({ status: -1, errorMessage: "User could not be updated", err: err });
          }
          else {
            // Create UserStats if necessary
            if(insertServer) {
              UserStat.create({user: user.id, server: server.id}).done(function(err, stat) {
                callback(req, res, user, 1);
              });
            }
            else {
                callback(req, res, user, 2);
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
        server.save(function(err) {
          if(err) {
            res.json({ status: -1, errorMessage: "Server could not be updated", err: err });
          }
          else {
            res.json({ status: 0, message: "Server found", server: server });
          }
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
      checkPlayer(req, res, req.query.pseudo, server, function(req, res, user, created) {
        if(created === 0) {
          res.json({ status: 0, errorMessage: "User created", user: user });
        }
        else if(created === 1) {
          res.json({ status: 0, errorMessage: "User updated. First time on this server", user: user });
        }
        else {
          res.json({ status: 0, errorMessage: "User updated", user: user });
        }
      })
    })
  },

  playerkilled: function(req, res) {
    checkServer(req, res, req.query.key, function(req, res, server) {
      checkPlayer(req, res, req.query.killer, server, function(req, res, killer, created) {
        checkPlayer(req, res, req.query.killed, server, function(req, res, killed, created) {

          Kill.create({killed: killed.id, killer: killer.id, server: server.id, weapon: req.query.weapon}).done(function(err, kill) {
            if(err) {
              res.json({ status: -1, errorMessage: "Kill could not be created", err: err });
            }
            else {
              var stats = null;
              for (var i = killer.stats.length - 1; i >= 0; i--) {
                if(killer.stats[i].server === server.id) {
                  stats = killer.stats[i];
                }
              };
              stats.kills++;
              stats.ratio = stats.kills/(stats.pvpDeaths === 0 ? 1 : pvpDeaths);
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
            }
          });
        });
      });
    });
  },

  updatePlayer: function(req, res) {
    checkServer(req, res, req.query.key, function(req, res, server) {
      checkPlayer(req, res, req.query.pseudo, server, function(req, res, user, created) {
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
            res.json({ status: -1, errorMessage: "User could not be updated", err: err });
          }
          else {
            res.json({ status: 0, errorMessage: "User updated", user: user });
          }
        });
      });
    });
  },

  // Handle getplayer
  player: function(req, res) {
    checkServer(req, res, req.query.key, function(req, res, server) {
      checkPlayer(req, res, req.query.pseudo, server, function(req, res, user, created) {
        if(created === 0) {
          res.json({ status: 0, errorMessage: "User created", user: user });
        }
        else if(created === 1) {
          res.json({ status: 0, errorMessage: "User updated. First time on this server", user: user });
        }
        else {
          res.json({ status: 0, errorMessage: "User updated", user: user });
        }
      })
    })
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
