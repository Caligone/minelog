// ServersService.js - in api/services
exports.getServerNames = function(callback) {
  Server.find().exec(function(err, servers) {
    var serverNames = [];
    for(serverKey in servers) {
      serverNames.push(servers[serverKey].name);
    }
    callback(serverNames);
  });
};

exports.getServers = function(callback, limit, skip) {
  Server.find().limit(limit).skip(skip).exec(function(err, servers) {
    callback(servers);
  });
};
