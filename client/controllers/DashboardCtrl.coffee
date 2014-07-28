angular .module('minelogApp')
        .controller('dashboardCtrl', ['$scope', 'socket', 'logger', ($scope, socket, logger) ->
          
          _subURLs = []
          _unsubURLs = []

          subscribe = () ->
            socket.get('/dashboard/GlobalSubscribe', (counters) ->
              $scope.counters = counters
            )
            socket.get('/dashboard/TopServersSubscribe', (data) ->
              $scope.servers = data.servers
            )
            socket.get('/dashboard/TopPlayersSubscribe', (data) ->
              $scope.players = data.players
            )
          
          unsubscribe = () ->
            socket.get('/dashboard/GlobalUnsubscribe', (data) ->

            )
            socket.get('/dashboard/TopServersUnsubscribe', (data) ->

            )
            socket.get('/dashboard/TopPlayersUnsubscribe', (data) ->

            )
            socket.removeListener('globalDashboardUpdate')
            socket.removeListener('topPlayersDashboardUpdate')
            socket.removeListener('topServersDashboardUpdate')

          socket.on('globalDashboardUpdate', (data) ->
            $scope.counters = data
          )

          socket.on('topPlayersDashboardUpdate', (data) ->
            $scope.players = data.players
          )

          socket.on('topServersDashboardUpdate', (data) ->
            $scope.servers = data.servers
          )

          logger.logWarning('Minelog is currently in beta. Report bug and help us to make something awesome !')
          
          subscribe()

          $scope.$on('$destroy', () ->
            unsubscribe()
          )
        ])