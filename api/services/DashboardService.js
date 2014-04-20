// DashboardService.js - in api/services
exports.getGlobalData = function(callback) {
  User.count().exec(function(err, userscount) {
    Server.count().exec(function(err, serverscount) {
      Kill.count().exec(function(err, killscount) {
        UserStat.find().sum('blocksBroken').exec(function(err, blockscount) {
          if(!err && blockscount.length > 0) {
            var obj = { status: 0, users: userscount, servers: serverscount, kills: killscount, blocks: blockscount[0].blocksBroken};
            callback(obj);
          }
          else {
            var obj = { status: 0, users: userscount, servers: serverscount, kills: killscount, blocks: 0};
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
   User.find().limit(5).populate('stats').exec(function(err, users) {
      for(user in users) {
        var avgRatio = 0, nbRatio = 0;
        for(stat in users[user].stats) {
          if(!isNaN(parseInt(users[user].stats[stat].ratio))) {
            avgRatio += users[user].stats[stat].ratio;
            nbRatio++;
          }
        }
        avgRatio /= nbRatio;
        avgRatio = avgRatio.toFixed(2);
        users[user].avgRatio = avgRatio;
      }
      callback({ status: 0, users: users });
    });
}
