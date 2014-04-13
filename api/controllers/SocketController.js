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

  join: function(req, res) {
    console.log("YEAH");
    var roomName = req.param('roomName');
    if(roomName !== undefined) {
      sails.sockets.join(req.socket, roomName);
      res.json({ status: 0, message: sails.sockets.id(req.socket)+' subscribed to the '+roomName+'' });
    }
    else {
      res.json({ status: -1, message: sails.sockets.id(req.socket)+' could not subscribe to the '+roomName+'' });
    }
  },

  leave: function(req, res) {
    var roomName = req.param('roomName');
    if(roomName !== undefined) {
      sails.sockets.leave(req.socket, roomName);
      res.json({ status: 0, message: sails.sockets.id(req.socket)+' subscribed to the '+roomName+'' });
    }
    else {
      res.json({ status: -1, message: sails.sockets.id(req.socket)+' could not subscribe to the '+roomName+'' });
    }
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
