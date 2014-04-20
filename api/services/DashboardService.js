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
