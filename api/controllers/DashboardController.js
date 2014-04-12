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

  // Handle a plugin connection
  getData: function(req, res) {
    User.count().exec(function(err, userscount) {
      Server.count().exec(function(err, serverscount) {
        Kill.count().exec(function(err, killscount) {
          UserStat.find().sum('blocksBroken').done(function(err, blockscount) {
            res.json({ status: -1, users: userscount, servers: serverscount, kills: killscount, blocks: blockscount[0].blocksBroken});
          });
        });
      });
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
