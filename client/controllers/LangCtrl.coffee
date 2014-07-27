angular .module("minelogApp")
        .controller('LangCtrl', ['$scope', 'localize', ($scope, localize) ->
            localize.setLanguage('EN-US')
            $scope.lang = 'English'
            $scope.setLang = (lang) ->
              switch (lang)
                when 'English' then localize.setLanguage('EN-US')
                when 'Français' then localize.setLanguage('FR-FR')
              $scope.lang = lang;
        ])