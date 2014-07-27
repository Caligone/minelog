angular.module('minelogApp').directive('i18n', [
  'localize', function(localize) {
    var i18nDirective;
    return i18nDirective = {
      restrict: 'EA',
      updateText: function(ele, input, placeholder) {
        var result;
        result = 0;
        if ('i18n-placeholder' === input) {
          result = localize.getLocalizedString(placeholder);
          return ele.attr('placeholder', result);
        } else {
          if (input.length >= 1) {
            result = localize.getLocalizedString(input);
            return ele.text(result);
          }
        }
      },
      link: function(scope, ele, attrs) {
        scope.$on('localizeResourcesUpdated', function() {
          return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder);
        });
        return attrs.$observe('i18n', function(value) {
          return i18nDirective.updateText(ele, value, attrs.placeholder);
        });
      }
    };
  }
]);

//# sourceMappingURL=i18n.js.map
