angular.module('minelogApp').controller('dashboardCtrl', [
  '$scope', 'socket', 'logger', function($scope, socket, logger) {
    var subscribe, unsubscribe;
    subscribe = function() {
      socket.get('/dashboard/GlobalSubscribe', function(counters) {
        return $scope.counters = counters;
      });
      socket.get('/dashboard/TopServersSubscribe', function(data) {
        return $scope.servers = data.servers;
      });
      return socket.get('/dashboard/TopPlayersSubscribe', function(data) {
        return $scope.players = data.players;
      });
    };
    unsubscribe = function() {
      socket.get('/dashboard/GlobalUnsubscribe', function(data) {});
      socket.get('/dashboard/TopServersUnsubscribe', function(data) {});
      socket.get('/dashboard/TopPlayersUnsubscribe', function(data) {});
      socket.removeListener('globalDashboardUpdate');
      socket.removeListener('topPlayersDashboardUpdate');
      return socket.removeListener('topServersDashboardUpdate');
    };
    socket.on('globalDashboardUpdate', function(data) {
      return $scope.counters = data;
    });
    socket.on('topPlayersDashboardUpdate', function(data) {
      return $scope.players = data.players;
    });
    socket.on('topServersDashboardUpdate', function(data) {
      return $scope.servers = data.servers;
    });
    logger.logWarning('Minelog is currently in beta. Report bug and help us to make something awesome !');
    subscribe();
    return $scope.$on('$destroy', function() {
      return unsubscribe();
    });
  }
]);

//# sourceMappingURL=DashboardCtrl.js.map
