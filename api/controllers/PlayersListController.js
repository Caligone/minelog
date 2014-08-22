/**
 * PlayersListController
 */

module.exports = {

  playersListSubscribe: function(req, res) {
    sails.sockets.join(req.socket, 'playersListRoom');
    res.json({ status: 0 });
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

  getPlayersPaginated: function(req, res) {
    var nbPlayer = 20;
    var page = req.param('page');
    var skip = page*nbPlayer;
    PlayersService.getPlayers(function(data) {
      res.json(data);
    }, nbPlayer, skip);
  },

  getPlayersByPseudo: function(req, res) {
    var pseudo = req.param('pseudo');
    Player.find().populate('stats').sort('pseudo').where({pseudo: {contains: pseudo}}).exec(function(err, players) {
      for(player in players) {
        var avgRatio = 0, nbRatio = 0;
        for(stat in players[player].stats) {
          if(!isNaN(parseInt(players[player].stats[stat].ratio))) {
            avgRatio += players[player].stats[stat].ratio;
            nbRatio++;
          }
        }
        avgRatio /= nbRatio;
        avgRatio = avgRatio.toFixed(2);
        players[player].avgRatio = avgRatio;
      }
      res.json(players);
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}

};
