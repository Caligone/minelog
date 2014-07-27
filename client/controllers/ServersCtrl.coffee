angular .module("minelogApp")
        .controller('serversCtrl', ['$scope', '$http', 'socket', ($scope, $http, socket) ->
          
          subscribe = () ->
            socket.get('/serversList/ServersListSubscribe', (servers) ->
              $scope.servers = servers
            )

          unsubscribe = () ->
            socket.get('/serversList/ServersListUnsubscribe', (data) -> 

            )
            socket.removeListener('serversListUpdate')

          $http({method: 'GET', url: '/serversList/serverNames'})
          .success((serverNames) ->
              $scope.serverNames = serverNames
          )

          socket.on('serversListUpdate', (servers) ->
              $scope.servers = servers
          )

          subscribe()
          
          $scope.$on('$destroy', () ->
              unsubscribe()
          )
        ])