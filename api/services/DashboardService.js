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
  var query = "SELECT pseudo, online status, round(CAST(avg(ratio) as numeric), 2) avgratio, 0 score FROM player p, playerstat ps WHERE p.id = ps.player GROUP BY p.pseudo, p.online ORDER BY avgratio desc LIMIT 5";
   PlayerStat.query(query, function(err, players) {
      if(err) { console.log(err) }
      else {
        callback({ status: 0, players: players.rows });
      }
    });
}
