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

  getServersData: function(req, res) {
    Server.find().sort({onlinePlayers: 'desc'}).limit(5).exec(function(err, servers) {
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
      }
      res.json({ status: 0, users: users });
    });
  },

  subscribe: function(req, res) {
    sails.sockets.join(req.socket, 'dashboardRoom');
    console.log(req.socket.id+" subscribed to dashboardRoom");
    DashboardService.getGlobalData(function(data) {
      res.json(data);
    });
  },

  unsubscribe: function(req, res) {
    sails.sockets.leave(req.socket, 'dashboardRoom');
    console.log(req.socket.id+" unsubscribed to dashboardRoom");
    res.json({ status: 0 });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
