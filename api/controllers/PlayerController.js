/**
 * PlayerController
 */

module.exports = {

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
