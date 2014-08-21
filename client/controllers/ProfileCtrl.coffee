angular .module('minelogApp')
        .controller('profileCtrl', ['$scope', '$http', ($scope, $http) ->
          $http({method: 'GET', url: '/player/player?id=' + $routeParams.id })
          .success((player) ->
            if(player == '0')
              $location.path('500')

            $scope.player = player
            if(player.online)
              logger.logSuccess(player.pseudo + ' ' + localize.getLocalizedString('player-online'))
          )
        ])