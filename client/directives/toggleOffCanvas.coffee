angular .module('minelogApp')
        .directive('toggleOffCanvas', [() ->
          {
            restrict: 'A'
            link: (scope, ele) ->
              ele.on('click', () ->
                $('#app').toggleClass('on-canvas')
              )
          }
        ])