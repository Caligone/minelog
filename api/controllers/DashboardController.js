/**
 * DashboardController
 */

module.exports = {

  globalSubscribe: function(req, res) {
    console.log(req.socket.id+" subscribed to globalDashboardRoom");
    sails.sockets.join(req.socket, 'globalDashboardRoom');
    DashboardService.getGlobalData(function(data) {
      res.json(data);
    });
  },

  globalUnsubscribe: function(req, res) {
    console.log(req.socket.id+" unsubscribed to globalDashboardRoom");
    sails.sockets.leave('globalDashboardRoom');
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
