angular .module('minelogApp')
        .controller('playersCtrl', ['$scope', '$http', 'socket', ($scope, $http, socket) ->

          # Remove duplicates from $scope.players
          cleanPlayers = () ->
            cache = {}
            for player, index in $scope.players
              if(player)
                if(cache[player.id])
                  $scope.players.splice(index, 1)
                else
                  cache[player.id] = 1

          subscribe = () ->
            socket.get('/playersList/PlayersListSubscribe', (players) ->
            )
    
          unsubscribe = () ->
            socket.get('/playersList/PlayersListUnsubscribe', (data) ->)
            socket.removeListener('playersListUpdate')


          $http({method: 'GET', url: '/playersList/playerNames'})
          .success((playerNames) ->
              $scope.playerNames = playerNames
          )

          socket.on('playersListUpdate', (players) ->
              $scope.players = players
          )

          subscribe()

          $scope.players = []
          $scope.busy = false
          $scope.page = 0

          $scope.seeMore = () ->
            if($scope.busy)
              return
            $scope.busy = true
            socket.get('/playersList/getPlayerPaginated?page=' + $scope.page, (players) ->
              if(players.length != 0)
                $scope.page++  
              $scope.players = $scope.players.concat(players)
              cleanPlayers()
              $scope.busy = false
            )

          $scope.$watch('selected', () ->
            if($scope.selected?.length < 3)
              return
            $scope.busy = true
            socket.get('/playersList/getPlayerByPseudo?pseudo=' + $scope.selected, (players) ->
              $scope.players = $scope.players.concat(players)
              cleanPlayers()
              $scope.busy = false
            )
          )

          $scope.$on('$destroy', () ->
              unsubscribe()
          )
        ])