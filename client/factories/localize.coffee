angular .module('minelogApp')
        .factory('localize', ['$http', '$rootScope', '$window', ($http, $rootScope, $window) ->
          localize = {
            language: ''
            url: undefined
            resourceFileLoaded: false
            successCallback: (data) ->
              localize.dictionary = data
              localize.resourceFileLoaded = false
              $rootScope.$broadcast('localizeResourcesUpdated')
            setLanguage: (value) ->
              localize.language = value.toLowerCase().split('-')[0]
              localize.initLocalizedResources()
            setUrl: (value) ->
              localize.url = value
              localize.initLocalizedResources()
            buildUrl: () ->
              if(!localize.language)
                localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase()
                localize.language = localize.language.split("-")[0]
              "i18n/resources-locale_" + localize.language + ".js"
            initLocalizedResources: () ->
                if(localize.url)
                  url = localize.url
                else
                  url = localize.buildUrl()
                  $http.get(url)
                  .success(localize.successCallback)
                  .error(() ->
                    $rootScope.$broadcast('localizeResourcesUpdated')
                  )
            getLocalizedString: (value) ->
              result = undefined
              if(localize.dictionary && value)
                valueLowerCase = value.toLowerCase()
                if('' == localize.dictionary[valueLowerCase])
                  result = value;
                else
                  result = localize.dictionary[valueLowerCase]
              else
                result = value
              result

        }
    ])