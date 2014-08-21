/**
 * PlayersListController
 */

module.exports = {

  playersListSubscribe: function(req, res) {
    sails.sockets.join(req.socket, 'playersListRoom');
    PlayersService.getPlayers(function(data) {
      res.json(data);
    }, 50, 0);
  },

  playersListUnsubscribe: function(req, res) {
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
