angular.module('minelogApp').directive('slimScroll', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        return ele.slimScroll({
          height: '100%'
        });
      }
    };
  }
]);

//# sourceMappingURL=slimScroll.js.map
