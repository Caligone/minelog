angular .module('minelogApp')
        .directive('toggleMinNav', ['$rootScope', ($rootScope) ->
          {
            restrict: 'A'
            link: (scope, ele) ->
              app = $('#app')
              $window = $(window)
              ele.on('click', (e) ->
                if(app.hasClass('nav-min'))
                  app.removeClass('nav-min')
                else
                  app.addClass('nav-min')
                  $rootScope.$broadcast('minNav:enabled')
                e.preventDefault()
              )
              Timer = 0
              updateClass = () ->
                width = $window.width()
                if(768 > width)
                  app.removeClass('nav-min')
              $window.resize( () ->
                clearTimeout(t)
                t = setTimeout(updateClass, 300)
              )
          }
        ])