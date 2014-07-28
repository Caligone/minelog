angular.module('minelogApp').controller('minelogCtrl', [
  '$scope', '$location', function($scope, $location) {
    $scope.$on('$routeChangeStart', function(next, current) {
      console.log(next);
      return console.log(current.$$route.controller);
    });
    $scope.isSpecificPage = function() {
      var path;
      path = $location.path();
      return _.contains(["/404", "/500"], path);
    };
    return $scope.main = {
      brand: "MineLog"
    };
  }
]);

//# sourceMappingURL=MinelogCtrl.js.map
