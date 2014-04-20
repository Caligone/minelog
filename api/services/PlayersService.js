// PlayersService.js - in api/services
exports.getPlayerNames = function(callback) {
  User.find().exec(function(err, users) {
    var userNames = [];
    for(userKey in users) {
      userNames.push(users[userKey].pseudo);
    }
    callback(userNames);
  });
};

exports.getPlayers = function(callback) {
   User.find().populate('stats').exec(function(err, users) {
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
      callback(users);
    });
};

exports.getPlayer = function(id, callback) {
  console.log(id);
   User.find().where({id: id}).limit(1).populate('stats').populate('servers').exec(function(err, users) {
      var user = users[0];
      var avgRatio = 0, nbRatio = 0;
      for(stat in user.stats) {
        if(!isNaN(parseInt(user.stats[stat].ratio))) {
          avgRatio += user.stats[stat].ratio;
          nbRatio++;
        }
      }
      avgRatio /= nbRatio;
      avgRatio = avgRatio.toFixed(2);
      callback(user);
    });
};
