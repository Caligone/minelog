/**
 * PlayerController
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
/*
  playerSubscribe: function(req, res) {
    console.log(req.socket.id+" subscribed to serversListRoom");
    sails.sockets.join(req.socket, 'serversListRoom');
    ServersService.getServers(function(data) {
      res.json(data);
    });
  },

  playerUnsubscribe: function(req, res) {
    console.log(req.socket.id+" unsubscribed to serversListRoom");
    sails.sockets.leave('serversListRoom');
    res.json({ status: 0 });
  },
*/
  player: function(req, res) {
    PlayersService.getPlayer(req.query.id, function(data) {
      res.json(data);
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
