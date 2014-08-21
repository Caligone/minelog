/**
 * PlayersListController
 */

module.exports = {

  playersListSubscribe: function(req, res) {
    sails.sockets.join(req.socket, 'playersListRoom');
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

  getPlayerPaginated: function(req, res) {
    var nbPlayer = 50;
    var page = req.param('page');
    var skip = page*nbPlayer;
    PlayersService.getPlayers(function(data) {
      res.json(data);
    }, nbPlayer, skip);
  },

  getPlayerByPseudo: function(req, res) {
    var pseudo = req.param('pseudo');
    Player.find().where({pseudo: {contains: pseudo}}).exec(function(err, players) {
      res.json(players);
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}

};
