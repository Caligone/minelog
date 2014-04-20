/**
 * PlayersListController
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

  playersListSubscribe: function(req, res) {
    console.log(req.socket.id+" subscribed to playersListRoom");
    sails.sockets.join(req.socket, 'playersListRoom');
    PlayersService.getPlayers(function(data) {
      res.json(data);
    });
  },

  playersListUnsubscribe: function(req, res) {
    console.log(req.socket.id+" unsubscribed to playersListRoom");
    sails.sockets.leave('playersListRoom');
    res.json({ status: 0 });
  },

  getPlayerNames: function(req, res) {
    PlayersService.getPlayerNames(function(data) {
      res.json(data);
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
