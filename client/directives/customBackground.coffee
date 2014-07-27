angular .module('minelogApp')
        .directive('customBackground', () ->
          {
            restrict: 'A'
            controller: ['$scope', '$element', '$location', ($scope, $element, $location) ->
              path = () ->
                $location.path()
              addBg = (path) ->
                $element.removeClass('body-home body-special body-tasks body-lock')
                switch (path)
                  when '/'    then $element.addClass('body-home')
                  when '/404' then $element.addClass('body-special')
                  when '/500' then $element.addClass('body-special')
              addBg($location.path())
              $scope.$watch(path, (newVal, oldVal) ->
                if(newVal != oldVal)
                  addBg($location.path())
              )
            ]
          }
        )