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

exports.getPlayers = function(callback) {
   Player.find().populate('stats').exec(function(err, players) {
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
   Player.find().where({id: id}).limit(1).populate('stats').populate('servers').exec(function(err, players) {
      var player = players[0];
      var avgRatio = 0, nbRatio = 0;
      for(stat in player.stats) {
        if(!isNaN(parseInt(player.stats[stat].ratio))) {
          avgRatio += player.stats[stat].ratio;
          nbRatio++;
        }
      }
      avgRatio /= nbRatio;
      avgRatio = avgRatio.toFixed(2);
      callback(player);
    });
};
