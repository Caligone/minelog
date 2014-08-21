angular.module("minelogApp").controller('LangCtrl', [
  '$scope', 'localize', function($scope, localize) {
    localize.setLanguage('EN-US');
    $scope.lang = 'English';
    return $scope.setLang = function(lang) {
      switch (lang) {
        case 'English':
          localize.setLanguage('EN-US');
          break;
        case 'Français':
          localize.setLanguage('FR-FR');
      }
      return $scope.lang = lang;
    };
  }
]);

//# sourceMappingURL=LangCtrl.js.map
