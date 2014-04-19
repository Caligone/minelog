/**
 * DashboardController
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

  getGlobalData: function(req, res) {
    User.count().exec(function(err, userscount) {
      Server.count().exec(function(err, serverscount) {
        Kill.count().exec(function(err, killscount) {
          UserStat.find().sum('blocksBroken').exec(function(err, blockscount) {
            if(!err && blockscount.length > 0) {
              res.json({ status: -1, users: userscount, servers: serverscount, kills: killscount, blocks: blockscount[0].blocksBroken});
            }
            else {
              res.json({ status: -1, users: userscount, servers: serverscount, kills: killscount, blocks: 0});
            }
          });
        });
      });
    });
  },

  getServersData: function(req, res) {
    Server.find().limit(5).exec(function(err, servers) {
      res.json({ status: 0, servers: servers });
    });
  },

  getUsersData: function(req, res) {
    User.find().limit(5).populate('stats').exec(function(err, users) {
      for(user in users) {
        var avgRatio = 0, nbRatio = 0;
        for(stat in users[user].stats) {
          if(!isNaN(parseInt(users[user].stats[stat].ratio))) {
            avgRatio += users[user].stats[stat].ratio;
            nbRatio++;
          }
        }
        avgRatio /= nbRatio;
        avgRatio = avgRatio.toFixed(2);
        users[user].avgRatio = avgRatio;
        console.log(users[user].avgRatio);
      }
        console.log(users);
      res.json({ status: 0, users: users });
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
