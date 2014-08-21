// PlayersService.js - in api/services
exports.getPlayerNames = function(callback) {
  Player.find().exec(function(err, players) {
    var playerNames = [];
    for(playerKey in players) {
      playerNames.push(players[playerKey].pseudo);
    }
    callback(playerNames);
  });
};

exports.getPlayers = function(callback, limit, skip) {
   Player.find().populate('stats').sort('pseudo').limit(limit).skip(skip).exec(function(err, players) {
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
      callback(players);
    });
};

exports.getPlayer = function(id, callback) {

  var query = 'SELECT p.id, p.pseudo, p.online ponline, ps.ratio, ps."timePlayed", ps."blocksBroken", ps."blocksPlaced", ps."levelMax", ps.verbosity, ps.kills, ps."pvpDeaths", ps."stupidDeaths", s.name, s.address, s.version, s.size, s."onlinePlayers", s.online sonline, p."lastLogin" FROM  player p, playerstat ps, server s WHERE p.id = $1 AND p.id = ps.player AND ps.server = s.id';
  var params = [id];
  Player.query(query, params, function(err, res) {
    if(err) { console.log(err) }
    else {
      if(res.rows.length === 0) {
        callback(0);
      }
      // Building general info
      var playerInfo = {};
      playerInfo.id = res.rows[0].id;
      playerInfo.pseudo = res.rows[0].pseudo;
      playerInfo.online = res.rows[0].ponline;
      playerInfo.lastLogin = res.rows[0].lastLogin;

      // Init global stats
      playerInfo.global = {};
      playerInfo.global.ratio = 0;
      playerInfo.global.timePlayed = 0;
      playerInfo.global.blocksBroken = 0;
      playerInfo.global.blocksPlaced = 0;
      playerInfo.global.levelMax = 0;
      playerInfo.global.verbosity = 0;
      playerInfo.global.kills = 0;
      playerInfo.global.pvpDeaths = 0;
      playerInfo.global.stupidDeaths = 0;

      playerInfo.srv = [];
      for(key in res.rows) {
        // Building server info
        var srv = {};
        srv.name = res.rows[key].name;
        srv.address = res.rows[key].address;
        srv.version = res.rows[key].version;
        srv.size = res.rows[key].size;
        srv.onlinePlayers = res.rows[key].onlinePlayers;
        srv.online = res.rows[key].sonline;

        // Building stats per server
        srv.stats = {};
        srv.stats.ratio = res.rows[key].ratio;
        srv.stats.timePlayed = res.rows[key].timePlayed;
        srv.stats.blocksBroken = res.rows[key].blocksBroken;
        srv.stats.blocksPlaced = res.rows[key].blocksPlaced;
        srv.stats.levelMax = res.rows[key].levelMax;
        srv.stats.verbosity = res.rows[key].verbosity;
        srv.stats.kills = res.rows[key].kills;
        srv.stats.pvpDeaths = res.rows[key].pvpDeaths;
        srv.stats.stupidDeaths = res.rows[key].stupidDeaths;

        // Building global stats
        playerInfo.global.ratio += res.rows[key].ratio
        playerInfo.global.timePlayed += res.rows[key].timePlayed
        playerInfo.global.blocksBroken += res.rows[key].blocksBroken
        playerInfo.global.blocksPlaced += res.rows[key].blocksPlaced
        playerInfo.global.levelMax += res.rows[key].levelMax
        playerInfo.global.verbosity += res.rows[key].verbosity
        playerInfo.global.kills += res.rows[key].kills
        playerInfo.global.pvpDeaths += res.rows[key].pvpDeaths
        playerInfo.global.stupidDeaths += res.rows[key].stupidDeaths

        playerInfo.srv.push(srv);
      }
      playerInfo.global.ratio /= res.rows.length;
      callback(playerInfo)
    }
  });
};
