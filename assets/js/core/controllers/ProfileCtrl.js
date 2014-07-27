angular.module('minelogApp').controller('profileCtrl', [
  '$scope', '$http', function($scope, $http) {
    return $http({
      method: 'GET',
      url: '/player/player?id=' + $routeParams.id
    }).success(function(player) {
      if (player === '0') {
        $location.path('500');
      }
      $scope.player = player;
      if (player.online) {
        return logger.logSuccess(player.pseudo + ' ' + localize.getLocalizedString('player-online'));
      }
    });
  }
]);

//# sourceMappingURL=ProfileCtrl.js.map
