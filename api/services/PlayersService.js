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
