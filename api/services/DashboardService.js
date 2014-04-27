// DashboardService.js - in api/services
exports.getGlobalData = function(callback) {
  var query = 'SELECT max(g.kills) kills, max(g.players) players, max(g.servers) servers, max(g.blocks) blocks FROM (SELECT count(1) kills, 0  players, 0    servers, 0        blocks FROM kill UNION SELECT 0  kills, count(1) players, 0    servers, 0      blocks FROM player UNION SELECT 0  kills, 0  players, count(1) servers, 0      blocks FROM server UNION SELECT 0  kills, 0  players, 0    servers, sum("blocksBroken")  blocks FROM playerstat) g;'
  PlayerStat.query(query, function(err, res) {
    callback(res.rows[0]);
  })
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
