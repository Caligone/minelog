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

module.exports = {

  // Handle a plugin connection
  connect: function(req, res) {
    Server.find({ key: req.query.key }).done(function(err, servers) {
      // "Handle" problems
      if (err) { return res.send(err, 500); }

      // Server not found
      if(servers.length <= 0) {
        res.json({ status: -1, message: "Server not found" });
      }
      // Server(s) found
      else {
        // Multiple server found (???)
        if(servers.length != 1) {
          res.json({ status: -1, message: "Server unicity trouble" });
        }
        else {
          var server = servers[0];
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
          server.lastHeartBeat = new Date().toISOString();
          server.active = true;
          server.save(function(err) {
            res.json({ status: 0, message: "Server found", server: server });
          });
        }
      }
    });
  },

  // Handle Heartbeat
  heartbeat: function(req, res) {
    Server.find({ key: req.query.key }).done(function(err, servers) {
      // "Handle" problems
      if (err) { return res.send(err, 500); }

      // Server not found
      if(servers.length <= 0) {
        res.json({ status: -1, message: "Server not found" });
      }
      // Server(s) found
      else {
        // Multiple server found (???)
        if(servers.length != 1) {
          res.json({ status: -1, message: "Server unicity trouble" });
        }
        // OK, do your stuff
        else {
          var server = servers[0];
          server.lastHeartBeat = new Date().toISOString();
          server.active = true;
          server.save(function(err) {
            res.json({ status: 0, message: "Server found", server: server });
          });
        }
      }
    });
  },

  // Handle playerConnect

  // TODO Handle invalid pseudo
  playerconnect: function(req, res) {
    Server.find({ key: req.query.key }).done(function(err, servers) {
      // "Handle" problems
      if (err) { return res.send(err, 500); }

      // Server not found
      if(servers.length <= 0) {
        res.json({ status: -1, message: "Server not found" });
      }
      // Server(s) found
      else {
        // Multiple servers found (???)
        if(servers.length != 1) {
          res.json({ status: -1, message: "Server unicity trouble" });
        }
        // OK, do your stuff
        else {
          var server = servers[0];
          User.find({ pseudo: req.query.pseudo }).done(function(err, users) {
            // "Handle" problems
            if (err) { return res.send(err, 500); }

            // User does not exist
            if(users.length <= 0) {
              User.create({ pseudo: req.query.pseudo, lastLogin: new Date().toISOString(), servers: [server.id] }).done(function(err, user) {
                if(err) {
                  res.json({ status: -1, errorMessage: "User could not be create", server: server });
                }
                else {
                  user.servers.add(server.id);
                  user.save(function() {
                    UserStat.create({user: user.id, server: server.id}).done(function(err, stat) {
                      res.json({ status: 0, errorMessage: "User created", server: server });
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
                user.lastLogin = new Date().toISOString();
                user.servers.add(server.id);
                user.lastLogin = new Date().toISOString();
                // Try to find stats for this user on this server
                UserStat.find({user: user.id, server: server.id}).exec(function(err, users) {
                  // User does not have stats of this server
                  if(users.length === 0) {
                      UserStat.create({user: user.id, server: server.id}).done(function(err, stat) {
                        res.json({ status: 0, errorMessage: "User updated. First time on this server", server: server });
                      });
                  }
                  else {
                    res.json({ status: 0, errorMessage: "User updated", server: server });
                  }
                });
              }
            }
          });
        }
      }
    });
  },

  playerkilled: function(req, res) {
    Server.find({ key: req.query.key }).done(function(err, servers) {
      // "Handle" problems
      if (err) { return res.send(err, 500); }

      // Server not found
      if(servers.length <= 0) {
        res.json({ status: -1, message: "Server not found" });
      }
      // Server(s) found
      else {
        // Multiple server found (???)
        if(servers.length != 1) {
          res.json({ status: -1, message: "Server unicity trouble" });
        }
        // OK, do your stuff
        else {
          var server = servers[0];
          server.lastHeartBeat = new Date().toISOString();
          server.active = true;
          server.save(function(err) {
            User.find({ pseudo: req.query.killer }).done(function(err, killers) {
              if(killers.length != 1) {
                res.json({ status: -1, message: "Player unicity trouble" });
              }
              else {
                killers[0].stats.kills++;
                killers[0].stats.ratio = killers[0].stats.kills/(killers[0].stats.pvpDeaths === 0 ? 1 : killers[0].stats.pvpDeaths);
                killers[0].save();
                User.find({ pseudo: req.query.killed }).done(function(err, killeds) {
                  if(killeds.length != 1) {
                    res.json({ status: -1, message: "Player unicity trouble" });
                  }
                  else {
                    killeds[0].stats.pvpDeaths++;
                    killeds[0].stats.ratio = killeds[0].stats.kills/(killeds[0].stats.pvpDeaths === 0 ? 1 : killeds[0].stats.pvpDeaths);
                    killeds[0].save();
                    Kill.create({killed: killeds[0].id, killer: killers[0].id, server: server.id, weapon: req.query.weapon}).done(function(err, kill) {
                      res.json({ status: 0, message: "Kill added", kill: kill });
                    });
                  }
                });
              }
            });
          });
        }
      }
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
