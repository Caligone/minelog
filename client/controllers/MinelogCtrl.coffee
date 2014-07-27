angular	.module('minelogApp')
				.controller('minelogCtrl', ['$scope', '$location', ($scope, $location) ->
			 		$scope.isSpecificPage = () ->
            path = $location.path()
            _.contains(["/404", "/500"], path)
          $scope.main = {
                brand: "MineLog"
           }
				])