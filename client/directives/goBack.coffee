angular .module('minelogApp')
        .directive('goBack', [ () ->
          {
            restrict: 'A'
            controller: ['$scope', '$element', '$window', ($scope, $element, $window) ->
              $element.on('click', () ->
                $window.history.back()
              )
            ]
          }
        ])