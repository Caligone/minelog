angular .module('minelogApp')
        .directive('slimScroll', [ () ->
          {
            restrict: 'A',
            link: (scope, ele) ->
              ele.slimScroll({
                height: '100%'
              })
          }
    		])