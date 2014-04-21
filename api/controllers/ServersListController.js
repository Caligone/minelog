/**
 * ServersListController
 */

module.exports = {

  serversListSubscribe: function(req, res) {
    console.log(req.socket.id+" subscribed to serversListRoom");
    sails.sockets.join(req.socket, 'serversListRoom');
    ServersService.getServers(function(data) {
      res.json(data);
    });
  },

  serversListUnsubscribe: function(req, res) {
    console.log(req.socket.id+" unsubscribed to serversListRoom");
    sails.sockets.leave('serversListRoom');
    res.json({ status: 0 });
  },

  getServerNames: function(req, res) {
    ServersService.getServerNames(function(data) {
      res.json(data);
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
