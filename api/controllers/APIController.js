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
      if (err) { return res.send(err, 500) };

      // Server not found
      if(servers.length <= 0) {
        res.json({ status: -1, errorMessage: "Server not found" });
      }
      // Server(s) found
      else {
        // Multiple server found (???)
        if(servers.length != 1) {
          res.json({ status: -1, errorMessage: "Server unicity trouble" });
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
            res.json({ status: 0, errorMessage: "Server found", server: server });
          });
        }
      }
    });
  },

  // Handle Heartbeat
  heartbeat: function(req, res) {
    Server.find({ key: req.query.key }).done(function(err, servers) {
      // "Handle" problems
      if (err) { return res.send(err, 500) };

      // Server not found
      if(servers.length <= 0) {
        res.json({ status: -1, errorMessage: "Server not found" });
      }
      // Server(s) found
      else {
        // Multiple server found (???)
        if(servers.length != 1) {
          res.json({ status: -1, errorMessage: "Server unicity trouble" });
        }
        // OK, do your stuff
        else {
          var server = servers[0];
          server.lastHeartBeat = new Date().toISOString();
          server.active = true;
          server.save(function(err) {
            res.json({ status: 0, errorMessage: "Server found", server: server });
          });
        }
      }
    });
  },

  // Handle playerConnect
  playerconnect: function(req, res) {
    Server.find({ key: req.query.key }).done(function(err, servers) {
      // "Handle" problems
      if (err) { return res.send(err, 500) };

      // Server not found
      if(servers.length <= 0) {
        res.json({ status: -1, errorMessage: "Server not found" });
      }
      // Server(s) found
      else {
        // Multiple servers found (???)
        if(servers.length != 1) {
          res.json({ status: -1, errorMessage: "Server unicity trouble" });
        }
        // OK, do your stuff
        else {
          var server = servers[0];
          User.find({ pseudo: req.query.pseudo }).done(function(err, users) {
            // "Handle" problems
            if (err) { return res.send(err, 500) };

            // User does not exist
            if(users.length <= 0) {
              User.create({ pseudo: req.query.pseudo, lastLogin: new Date().toISOString(), servers: [server] }).done(function(err, user) {
                res.json({ status: 0, errorMessage: "User created", server: server });
              });
            }
            else {
              // Multiple users found (???)
              if(users.length != 1) {
                res.json({ status: -1, errorMessage: "User unicity trouble" });
              }
              else {
                var user = users[0];
                user.lastLogin = new Date().toISOString();
                if(!user.servers.contains(server)) {
                  user.servers.push(server);
                }
                user.lastLogin = new Date().toISOString();
                user.save(function(err) {
                  res.json({ status: 0, errorMessage: "User updated", server: server });
                });
              }
            }
          })
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
