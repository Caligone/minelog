angular .module('minelogApp')
        .controller('playersCtrl', ['$scope', '$http', 'socket', ($scope, $http, socket) ->
          subscribe = () ->
            socket.get('/playersList/PlayersListSubscribe', (players) ->
                $scope.players = players
            )
    
          unsubscribe = () ->
            socket.get('/playersList/PlayersListUnsubscribe', (data) ->
              )
            socket.removeListener('playersListUpdate')


          $http({method: 'GET', url: '/playersList/playerNames'})
          .success((playerNames) ->
              $scope.playerNames = playerNames
          )

          socket.on('playersListUpdate', (players) ->
              $scope.players = players
          )

          subscribe()

          $scope.$on('$destroy', () ->
              unsubscribe()
          )
        ])