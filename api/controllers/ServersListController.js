/**
 * ServersListController
 */

module.exports = {

  serversListSubscribe: function(req, res) {
    sails.sockets.join(req.socket, 'serversListRoom');
    res.json({ status: 0 });
  },

  serversListUnsubscribe: function(req, res) {
    sails.sockets.leave('serversListRoom');
    res.json({ status: 0 });
  },

  getServerNames: function(req, res) {
    ServersService.getServerNames(function(data) {
      res.json(data);
    });
  },

  getServersPaginated: function(req, res) {
    var nbServer = 20;
    var page = req.param('page');
    var skip = page*nbServer;
    ServersService.getServers(function(data) {
      res.json(data);
    }, nbServer, skip);
  },

  getServersByName: function(req, res) {
    var name = req.param('name');
    Server.find().populate('stats').sort('name').where({name: {contains: name}}).exec(function(err, servers) {
      res.json(servers);
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIController)
   */
  _config: {}


};
