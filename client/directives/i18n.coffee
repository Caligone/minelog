angular .module('minelogApp')
        .directive('i18n', ['localize', (localize) ->
          i18nDirective = {
            restrict: 'EA',
            updateText: (ele, input, placeholder) ->
              result = 0 
              if('i18n-placeholder' == input)
                result = localize.getLocalizedString(placeholder)
                ele.attr('placeholder', result)
              else
                if(input.length >= 1)
                  result = localize.getLocalizedString(input)
                  ele.text(result)
            link: (scope, ele, attrs) ->
              scope.$on('localizeResourcesUpdated', () -> 
                  i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder)
              )
              attrs.$observe('i18n', (value) ->
                  i18nDirective.updateText(ele, value, attrs.placeholder)
              )
            }
          ])