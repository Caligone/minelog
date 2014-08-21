angular.module('minelogApp').controller('playersCtrl', [
  '$scope', '$http', 'socket', function($scope, $http, socket) {
    var subscribe, unsubscribe;
    subscribe = function() {
      return socket.get('/playersList/PlayersListSubscribe', function(players) {
        $scope.players = players;
        return $scope.busy = false;
      });
    };
    unsubscribe = function() {
      socket.get('/playersList/PlayersListUnsubscribe', function(data) {});
      return socket.removeListener('playersListUpdate');
    };
    $http({
      method: 'GET',
      url: '/playersList/playerNames'
    }).success(function(playerNames) {
      return $scope.playerNames = playerNames;
    });
    socket.on('playersListUpdate', function(players) {
      return $scope.players = players;
    });
    subscribe();
    $scope.busy = true;
    $scope.seeMore = function() {
      return console.log('seeMore');
    };
    return $scope.$on('$destroy', function() {
      return unsubscribe();
    });
  }
]);

//# sourceMappingURL=PlayersCtrl.js.map
