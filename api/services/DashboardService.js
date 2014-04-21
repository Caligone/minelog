// DashboardService.js - in api/services
exports.getGlobalData = function(callback) {
  Player.count().exec(function(err, playerscount) {
    Server.count().exec(function(err, serverscount) {
      Kill.count().exec(function(err, killscount) {
        PlayerStat.find().sum('blocksBroken').exec(function(err, blockscount) {
          if(!err && blockscount.length > 0) {
            var obj = { status: 0, players: playerscount, servers: serverscount, kills: killscount, blocks: blockscount[0].blocksBroken};
            callback(obj);
          }
          else {
            var obj = { status: 0, players: playerscount, servers: serverscount, kills: killscount, blocks: 0};
            callback(obj);
          }
        });
      });
    });
  });
};

exports.getTopServers = function(callback) {
  Server.find().sort({onlinePlayers: 'desc'}).limit(5).exec(function(err, servers) {
    callback({ status: 0, servers: servers });
  });
};

exports.getTopPlayers = function(callback) {
   Player.find().limit(5).populate('stats').exec(function(err, players) {
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
      callback({ status: 0, players: players });
    });
}
