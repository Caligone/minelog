angular.module('minelogApp').controller('playersCtrl', [
  '$scope', '$http', 'socket', function($scope, $http, socket) {
    var cleanPlayers, subscribe, unsubscribe;
    $scope.players = [];
    $scope.page = 0;
    $scope.busy = false;
    $scope.selected = '';
    cleanPlayers = function() {
      var cache, index, player, _i, _len, _ref, _results;
      cache = {};
      _ref = $scope.players;
      _results = [];
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        player = _ref[index];
        if (player) {
          if (cache[player.id]) {
            _results.push($scope.players.splice(index, 1));
          } else {
            _results.push(cache[player.id] = 1);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
    subscribe = function() {
      return socket.get('/playersList/PlayersListSubscribe', function(players) {});
    };
    unsubscribe = function() {
      socket.get('/playersList/PlayersListUnsubscribe', function(data) {});
      return socket.removeListener('playersListUpdate');
    };
    socket.on('playersListUpdate', function(players) {
      $scope.players.concat(players);
      return cleanPlayers();
    });
    $scope.seeMore = function() {
      if ($scope.busy) {
        return;
      }
      $scope.busy = true;
      return socket.get('/playersList/getPlayersPaginated?page=' + $scope.page, function(players) {
        if (players.length !== 0) {
          $scope.page++;
        }
        $scope.players = $scope.players.concat(players);
        cleanPlayers();
        return $scope.busy = false;
      });
    };
    subscribe();
    $scope.$watch('selected', function() {
      var _ref;
      if (((_ref = $scope.selected) != null ? _ref.length : void 0) < 3) {
        return;
      }
      $scope.busy = true;
      return socket.get('/playersList/getPlayersByPseudo?pseudo=' + $scope.selected, function(players) {
        $scope.players = $scope.players.concat(players);
        cleanPlayers();
        return $scope.busy = false;
      });
    });
    return $scope.$on('$destroy', function() {
      return unsubscribe();
    });
  }
]);

//# sourceMappingURL=PlayersCtrl.js.map
