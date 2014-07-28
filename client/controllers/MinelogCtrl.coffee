angular .module('minelogApp')
        .controller('minelogCtrl', ['$scope', '$location', ($scope, $location) ->
          
          # When route change
          $scope.$on('$routeChangeStart', (next, current) -> 

          )

          # Check if the page is specific
          $scope.isSpecificPage = () ->
            path = $location.path()
            _.contains(["/404", "/500"], path)

          # Scope definitions
          $scope.main = {
                brand: "MineLog"
           }
        ])