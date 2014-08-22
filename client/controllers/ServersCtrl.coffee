angular .module("minelogApp")
        .controller('serversCtrl', ['$scope', '$http', 'socket', ($scope, $http, socket) ->
          
          # Initialization
          $scope.servers = []
          $scope.page = 0
          $scope.busy = false
          $scope.selected = ''

          # Remove duplicates from $scope.servers
          cleanServers = () ->
            cache = {}
            for server, index in $scope.servers
              if(server)
                if(cache[server.id])
                  $scope.servers.splice(index, 1)
                else
                  cache[server.id] = 1

          subscribe = () ->
            socket.get('/serversList/ServersListSubscribe', (servers) -> )

          unsubscribe = () ->
            socket.get('/serversList/ServersListUnsubscribe', (data) -> )
            socket.removeListener('serversListUpdate')

          socket.on('serversListUpdate', (servers) ->
              $scope.serverNames.concat(serverNames)
              cleanServers()
          )

          # Populate the table with another page
          $scope.seeMore = () ->
            if($scope.busy)
              return
            $scope.busy = true
            socket.get('/serversList/getServersPaginated?page=' + $scope.page, (servers) ->
              if(servers.length != 0)
                $scope.page++
              $scope.servers = $scope.servers.concat(servers)
              cleanServers()
              $scope.busy = false
            )

          subscribe()

          # Add specific server when their name are type in the selected field
          $scope.$watch('selected', () ->
            if($scope.selected?.length < 3)
              return
            $scope.busy = true
            socket.get('/serversList/getServersByName?name=' + $scope.selected, (servers) ->
              $scope.servers = $scope.servers.concat(servers)
              cleanServers()
              $scope.busy = false
            )
          )
          
          $scope.$on('$destroy', () ->
              unsubscribe()
          )
        ])