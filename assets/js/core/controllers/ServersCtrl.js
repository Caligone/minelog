angular.module("minelogApp").controller('serversCtrl', [
  '$scope', '$http', 'socket', function($scope, $http, socket) {
    var cleanServers, subscribe, unsubscribe;
    $scope.servers = [];
    $scope.page = 0;
    $scope.busy = false;
    $scope.selected = '';
    cleanServers = function() {
      var cache, index, server, _i, _len, _ref, _results;
      cache = {};
      _ref = $scope.servers;
      _results = [];
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        server = _ref[index];
        if (server) {
          if (cache[server.id]) {
            _results.push($scope.servers.splice(index, 1));
          } else {
            _results.push(cache[server.id] = 1);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
    subscribe = function() {
      return socket.get('/serversList/ServersListSubscribe', function(servers) {});
    };
    unsubscribe = function() {
      socket.get('/serversList/ServersListUnsubscribe', function(data) {});
      return socket.removeListener('serversListUpdate');
    };
    socket.on('serversListUpdate', function(servers) {
      $scope.serverNames.concat(serverNames);
      return cleanServers();
    });
    $scope.seeMore = function() {
      if ($scope.busy) {
        return;
      }
      $scope.busy = true;
      return socket.get('/serversList/getServersPaginated?page=' + $scope.page, function(servers) {
        if (servers.length !== 0) {
          $scope.page++;
        }
        $scope.servers = $scope.servers.concat(servers);
        cleanServers();
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
      return socket.get('/serversList/getServersByName?name=' + $scope.selected, function(servers) {
        $scope.servers = $scope.servers.concat(servers);
        cleanServers();
        return $scope.busy = false;
      });
    });
    return $scope.$on('$destroy', function() {
      return unsubscribe();
    });
  }
]);

//# sourceMappingURL=ServersCtrl.js.map
