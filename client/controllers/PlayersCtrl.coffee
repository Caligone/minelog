angular .module('minelogApp')
        .controller('playersCtrl', ['$scope', '$http', 'socket', ($scope, $http, socket) ->

          # Initialization
          $scope.players = []
          $scope.page = 0
          $scope.busy = false
          $scope.selected = ''

          # Remove duplicates from $scope.players
          cleanPlayers = () ->
            cache = {}
            for player, index in $scope.players
              if(player)
                if(cache[player.id])
                  $scope.players.splice(index, 1)
                else
                  cache[player.id] = 1

          # Subscribe to the room
          subscribe = () ->
            socket.get('/playersList/PlayersListSubscribe', (players) -> )
    
          # Unubscribe to the room
          unsubscribe = () ->
            socket.get('/playersList/PlayersListUnsubscribe', (data) -> )
            socket.removeListener('playersListUpdate')

          # Update $scope.players on room broadcast
          socket.on('playersListUpdate', (players) ->
              $scope.players.concat(players)
              cleanPlayers()
          )

          # Populate the table with another page
          $scope.seeMore = () ->
            if($scope.busy)
              return
            $scope.busy = true
            socket.get('/playersList/getPlayersPaginated?page=' + $scope.page, (players) ->
              if(players.length != 0)
                $scope.page++
              $scope.players = $scope.players.concat(players)
              cleanPlayers()
              $scope.busy = false
            )

          # Subscribe and populate the table a first time
          subscribe()

          # Add specific player when their name are type in the selected field
          $scope.$watch('selected', () ->
            if($scope.selected?.length < 3)
              return
            $scope.busy = true
            socket.get('/playersList/getPlayersByPseudo?pseudo=' + $scope.selected, (players) ->
              $scope.players = $scope.players.concat(players)
              cleanPlayers()
              $scope.busy = false
            )
          )

          $scope.$on('$destroy', () ->
              unsubscribe()
          )
        ])