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

  globalSubscribe: function(req, res) {
    console.log(req.socket.id+" subscribed to globalDashboardDashboardRoom");
    sails.sockets.join(req.socket, 'globalDashboardDashboardRoom');
    DashboardService.getGlobalData(function(data) {
      res.json(data);
    });
  },

  globalUnsubscribe: function(req, res) {
    console.log(req.socket.id+" unsubscribed to globalDashboardDashboardRoom");
    sails.sockets.leave('globalDashboardDashboardRoom');
    res.json({ status: 0 });
  },

  topPlayersSubscribe: function(req, res) {
    console.log(req.socket.id+" subscribed to topPlayersDashboardRoom");
    sails.sockets.join(req.socket, 'topPlayersDashboardRoom');
    DashboardService.getTopPlayers(function(data) {
      res.json(data);
    });
  },

  topPlayersUnsubscribe: function(req, res) {
    console.log(req.socket.id+" unsubscribed to topPlayersDashboardRoom");
    sails.sockets.leave('topPlayersDashboardRoom');
    res.json({ status: 0 });
  },

  topServersSubscribe: function(req, res) {
    console.log(req.socket.id+" subscribed to topServersDashboardRoom");
    sails.sockets.join(req.socket, 'topServersDashboardRoom');
    DashboardService.getTopServers(function(data) {
      res.json(data);
    });
  },

  topServersUnsubscribe: function(req, res) {
    console.log(req.socket.id+" unsubscribed to topServersDashboardRoom");
    sails.sockets.leave('topServersDashboardRoom');
    res.json({ status: 0 });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
