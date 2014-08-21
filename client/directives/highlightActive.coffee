angular .module('minelogApp')
        .directive('highlightActive', [ () ->
          {
            restrict: 'A'
            controller: ['$scope', '$element', '$attrs', '$location', ($scope, $element, $attrs, $location) ->
              links = $element.find('a')
              path = () ->
                $location.path()
              highlightActive = (links, path) ->
                  path = '#' + path
                  angular.forEach(links, (link) ->
                    $link = angular.element(link)
                    $li = $link.parent('li')
                    href = $link.attr('href')
                    $li.hasClass('active') && $li.removeClass('active')
                    if(0 == path.indexOf(href))
                      $li.addClass('active')
                  )
              
              highlightActive(links, $location.path())
              $scope.$watch(path, (newVal, oldVal) ->
                  if(newVal != oldVal)
                    highlightActive(links, $location.path())
              )
            ]
          }
        ])