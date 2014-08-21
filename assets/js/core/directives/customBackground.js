angular.module('minelogApp').directive('customBackground', function() {
  return {
    restrict: 'A',
    controller: [
      '$scope', '$element', '$location', function($scope, $element, $location) {
        var addBg, path;
        path = function() {
          return $location.path();
        };
        addBg = function(path) {
          $element.removeClass('body-home body-special body-tasks body-lock');
          switch (path) {
            case '/':
              return $element.addClass('body-home');
            case '/404':
              return $element.addClass('body-special');
            case '/500':
              return $element.addClass('body-special');
          }
        };
        addBg($location.path());
        return $scope.$watch(path, function(newVal, oldVal) {
          if (newVal !== oldVal) {
            return addBg($location.path());
          }
        });
      }
    ]
  };
});

//# sourceMappingURL=customBackground.js.map
