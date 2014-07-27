angular.module("minelogApp").controller('serversCtrl', [
  '$scope', '$http', 'socket', function($scope, $http, socket) {
    var subscribe, unsubscribe;
    subscribe = function() {
      return socket.get('/serversList/ServersListSubscribe', function(servers) {
        return $scope.servers = servers;
      });
    };
    unsubscribe = function() {
      socket.get('/serversList/ServersListUnsubscribe', function(data) {});
      return socket.removeListener('serversListUpdate');
    };
    $http({
      method: 'GET',
      url: '/serversList/serverNames'
    }).success(function(serverNames) {
      return $scope.serverNames = serverNames;
    });
    socket.on('serversListUpdate', function(servers) {
      return $scope.servers = servers;
    });
    subscribe();
    return $scope.$on('$destroy', function() {
      return unsubscribe();
    });
  }
]);

//# sourceMappingURL=ServersCtrl.js.map
