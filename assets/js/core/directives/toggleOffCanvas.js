angular.module('minelogApp').directive('toggleOffCanvas', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        return ele.on('click', function() {
          return $('#app').toggleClass('on-canvas');
        });
      }
    };
  }
]);

//# sourceMappingURL=toggleOffCanvas.js.map
