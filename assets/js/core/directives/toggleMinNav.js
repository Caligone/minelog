angular.module('minelogApp').directive('toggleMinNav', [
  '$rootScope', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        var $window, Timer, app, updateClass;
        app = $('#app');
        $window = $(window);
        ele.on('click', function(e) {
          if (app.hasClass('nav-min')) {
            app.removeClass('nav-min');
          } else {
            app.addClass('nav-min');
            $rootScope.$broadcast('minNav:enabled');
          }
          return e.preventDefault();
        });
        Timer = 0;
        updateClass = function() {
          var width;
          width = $window.width();
          if (768 > width) {
            return app.removeClass('nav-min');
          }
        };
        return $window.resize(function() {
          var t;
          clearTimeout(t);
          return t = setTimeout(updateClass, 300);
        });
      }
    };
  }
]);

//# sourceMappingURL=toggleMinNav.js.map
