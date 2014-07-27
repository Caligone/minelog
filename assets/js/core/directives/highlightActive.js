angular.module('minelogApp').directive('highlightActive', [
  function() {
    return {
      restrict: 'A',
      controller: [
        '$scope', '$element', '$attrs', '$location', function($scope, $element, $attrs, $location) {
          var highlightActive, links, path;
          links = $element.find('a');
          path = function() {
            return $location.path();
          };
          highlightActive = function(links, path) {
            path = '#' + path;
            return angular.forEach(links, function(link) {
              var $li, $link, href;
              $link = angular.element(link);
              $li = $link.parent('li');
              href = $link.attr('href');
              $li.hasClass('active') && $li.removeClass('active');
              if (0 === path.indexOf(href)) {
                return $li.addClass('active');
              }
            });
          };
          highlightActive(links, $location.path());
          return $scope.$watch(path, function(newVal, oldVal) {
            if (newVal !== oldVal) {
              return highlightActive(links, $location.path());
            }
          });
        }
      ]
    };
  }
]);

//# sourceMappingURL=highlightActive.js.map
