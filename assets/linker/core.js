angular.module('minelogApp', ['ngRoute', 'ngAnimate', 'infinite-scroll']).config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      redirectTo: '/dashboard',
      controller: 'dashboardCtrl'
    }).when('/dashboard', {
      templateUrl: 'dashboard',
      controller: 'dashboardCtrl'
    }).when('/feedback', {
      templateUrl: 'feedback',
      controller: 'feebackCtrl'
    }).when('/faq', {
      templateUrl: 'faq',
      controller: 'faqCtrl'
    }).when('/servers', {
      templateUrl: 'servers',
      controller: 'serversCtrl'
    }).when('/players', {
      templateUrl: 'players',
      controller: 'playersCtrl'
    }).when('/profile/:id', {
      templateUrl: 'profile',
      controller: 'profileCtrl'
    }).when('/server/:id', {
      templateUrl: 'server',
      controller: 'serverCtrl'
    }).when('/404', {
      templateUrl: '404',
      controller: 'err404Ctrl'
    }).when('/500', {
      templateUrl: '500',
      controller: 'err500Ctrl'
    }).otherwise({
      redirectTo: '404'
    });
  }
]);

//# sourceMappingURL=app.js.map
;angular.module('minelogApp').controller('dashboardCtrl', [
  '$scope', 'socket', 'logger', function($scope, socket, logger) {
    var subscribe, unsubscribe;
    subscribe = function() {
      socket.get('/dashboard/GlobalSubscribe', function(counters) {
        return $scope.counters = counters;
      });
      socket.get('/dashboard/TopServersSubscribe', function(data) {
        return $scope.servers = data.servers;
      });
      return socket.get('/dashboard/TopPlayersSubscribe', function(data) {
        return $scope.players = data.players;
      });
    };
    unsubscribe = function() {
      socket.get('/dashboard/GlobalUnsubscribe', function(data) {});
      socket.get('/dashboard/TopServersUnsubscribe', function(data) {});
      socket.get('/dashboard/TopPlayersUnsubscribe', function(data) {});
      socket.removeListener('globalDashboardUpdate');
      socket.removeListener('topPlayersDashboardUpdate');
      return socket.removeListener('topServersDashboardUpdate');
    };
    socket.on('globalDashboardUpdate', function(data) {
      return $scope.counters = data;
    });
    socket.on('topPlayersDashboardUpdate', function(data) {
      return $scope.players = data.players;
    });
    socket.on('topServersDashboardUpdate', function(data) {
      return $scope.servers = data.servers;
    });
    logger.logWarning('Minelog is currently in beta. Report bug and help us to make something awesome !');
    subscribe();
    return $scope.$on('$destroy', function() {
      return unsubscribe();
    });
  }
]);

//# sourceMappingURL=DashboardCtrl.js.map
;angular.module("minelogApp").controller('err404Ctrl', ['$scope', function($scope) {}]);

//# sourceMappingURL=Err404Ctrl.js.map
;angular.module("minelogApp").controller('err500Ctrl', ['$scope', function($scope) {}]);

//# sourceMappingURL=Err500Ctrl.js.map
;angular.module('minelogApp').controller('faqCtrl', function($scope) {});

//# sourceMappingURL=FAQCtrl.js.map
;angular.module('minelogApp').controller('feebackCtrl', function($scope) {});

//# sourceMappingURL=FeebackCtrl.js.map
;angular.module("minelogApp").controller('LangCtrl', [
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
;angular.module('minelogApp').controller('minelogCtrl', [
  '$scope', '$location', function($scope, $location) {
    $scope.$on('$routeChangeStart', function(next, current) {});
    $scope.isSpecificPage = function() {
      var path;
      path = $location.path();
      return _.contains(["/404", "/500"], path);
    };
    return $scope.main = {
      brand: "MineLog"
    };
  }
]);

//# sourceMappingURL=MinelogCtrl.js.map
;angular.module('minelogApp').controller('playersCtrl', [
  '$scope', '$http', 'socket', function($scope, $http, socket) {
    var cleanPlayers, subscribe, unsubscribe;
    cleanPlayers = function() {
      var cache, index, player, _i, _len, _ref, _results;
      cache = {};
      _ref = $scope.players;
      _results = [];
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        player = _ref[index];
        if (player) {
          if (cache[player.id]) {
            _results.push($scope.players.splice(index, 1));
          } else {
            _results.push(cache[player.id] = 1);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
    subscribe = function() {
      return socket.get('/playersList/PlayersListSubscribe', function(players) {});
    };
    unsubscribe = function() {
      socket.get('/playersList/PlayersListUnsubscribe', function(data) {});
      return socket.removeListener('playersListUpdate');
    };
    $http({
      method: 'GET',
      url: '/playersList/playerNames'
    }).success(function(playerNames) {
      return $scope.playerNames = playerNames;
    });
    socket.on('playersListUpdate', function(players) {
      return $scope.players = players;
    });
    subscribe();
    $scope.players = [];
    $scope.busy = false;
    $scope.page = 0;
    $scope.seeMore = function() {
      if ($scope.busy) {
        return;
      }
      $scope.busy = true;
      return socket.get('/playersList/getPlayerPaginated?page=' + $scope.page, function(players) {
        if (players.length !== 0) {
          $scope.page++;
        }
        $scope.players = $scope.players.concat(players);
        cleanPlayers();
        return $scope.busy = false;
      });
    };
    $scope.$watch('selected', function() {
      var _ref;
      if (((_ref = $scope.selected) != null ? _ref.length : void 0) < 3) {
        return;
      }
      $scope.busy = true;
      return socket.get('/playersList/getPlayerByPseudo?pseudo=' + $scope.selected, function(players) {
        $scope.players = $scope.players.concat(players);
        cleanPlayers();
        return $scope.busy = false;
      });
    });
    return $scope.$on('$destroy', function() {
      return unsubscribe();
    });
  }
]);

//# sourceMappingURL=PlayersCtrl.js.map
;angular.module('minelogApp').controller('profileCtrl', [
  '$scope', '$http', function($scope, $http) {
    return $http({
      method: 'GET',
      url: '/player/player?id=' + $routeParams.id
    }).success(function(player) {
      if (player === '0') {
        $location.path('500');
      }
      $scope.player = player;
      if (player.online) {
        return logger.logSuccess(player.pseudo + ' ' + localize.getLocalizedString('player-online'));
      }
    });
  }
]);

//# sourceMappingURL=ProfileCtrl.js.map
;angular.module('minelogApp').controller('serverCtrl', function($scope) {});

//# sourceMappingURL=ServerCtrl.js.map
;angular.module("minelogApp").controller('serversCtrl', [
  '$scope', '$http', 'socket', function($scope, $http, socket) {
    var subscribe, unsubscribe;
    subscribe = function() {
      return socket.get('/serversList/ServersListSubscribe', function(servers) {
        return $scope.servers = servers;
      });
    };
    unsubscribe = function() {
      socket.get('/serversList/ServersListUnsubscribe', function(data) {});
      return socket.removeListener('serversListUpdate');
    };
    $http({
      method: 'GET',
      url: '/serversList/serverNames'
    }).success(function(serverNames) {
      return $scope.serverNames = serverNames;
    });
    socket.on('serversListUpdate', function(servers) {
      return $scope.servers = servers;
    });
    subscribe();
    return $scope.$on('$destroy', function() {
      return unsubscribe();
    });
  }
]);

//# sourceMappingURL=ServersCtrl.js.map
;angular.module('minelogApp').directive('collapseNav', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        var $a, $aRest, $lists, $listsRest, app;
        $lists = ele.find('ul').parent('li');
        $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>');
        $a = $lists.children('a');
        $listsRest = ele.children('li').not($lists);
        $aRest = $listsRest.children('a');
        app = $('#app');
        $a.on('click', function(event) {
          var $parent, $this;
          if (!app.hasClass('nav-min')) {
            $this = $(this);
            $parent = $this.parent('li');
            $lists.not($parent).removeClass('open').find('ul').slideUp();
            $parent.toggleClass('open').find('ul').slideToggle();
            return event.preventDefault();
          }
        });
        $aRest.on('click', function() {
          return $lists.removeClass('open').find('ul').slideUp();
        });
        return scope.$on('minNav:enabled', function() {
          return $lists.removeClass('open').find('ul').slideUp();
        });
      }
    };
  }
]);

//# sourceMappingURL=collapseNav.js.map
;angular.module('minelogApp').directive('customBackground', function() {
  return {
    restrict: 'A',
    controller: [
      '$scope', '$element', '$location', function($scope, $element, $location) {
        var addBg, path;
        path = function() {
          return $location.path();
        };
        addBg = function(path) {
          $element.removeClass('body-home body-special body-tasks body-lock');
          switch (path) {
            case '/':
              return $element.addClass('body-home');
            case '/404':
              return $element.addClass('body-special');
            case '/500':
              return $element.addClass('body-special');
          }
        };
        addBg($location.path());
        return $scope.$watch(path, function(newVal, oldVal) {
          if (newVal !== oldVal) {
            return addBg($location.path());
          }
        });
      }
    ]
  };
});

//# sourceMappingURL=customBackground.js.map
;angular.module('minelogApp').directive('goBack', [
  function() {
    return {
      restrict: 'A',
      controller: [
        '$scope', '$element', '$window', function($scope, $element, $window) {
          return $element.on('click', function() {
            return $window.history.back();
          });
        }
      ]
    };
  }
]);

//# sourceMappingURL=goBack.js.map
;angular.module('minelogApp').directive('highlightActive', [
  function() {
    return {
      restrict: 'A',
      controller: [
        '$scope', '$element', '$attrs', '$location', function($scope, $element, $attrs, $location) {
          var highlightActive, links, path;
          links = $element.find('a');
          path = function() {
            return $location.path();
          };
          highlightActive = function(links, path) {
            path = '#' + path;
            return angular.forEach(links, function(link) {
              var $li, $link, href;
              $link = angular.element(link);
              $li = $link.parent('li');
              href = $link.attr('href');
              $li.hasClass('active') && $li.removeClass('active');
              if (0 === path.indexOf(href)) {
                return $li.addClass('active');
              }
            });
          };
          highlightActive(links, $location.path());
          return $scope.$watch(path, function(newVal, oldVal) {
            if (newVal !== oldVal) {
              return highlightActive(links, $location.path());
            }
          });
        }
      ]
    };
  }
]);

//# sourceMappingURL=highlightActive.js.map
;angular.module('minelogApp').directive('i18n', [
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
;angular.module('minelogApp').directive('slimScroll', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        return ele.slimScroll({
          height: '100%'
        });
      }
    };
  }
]);

//# sourceMappingURL=slimScroll.js.map
;angular.module('minelogApp').directive('toggleMinNav', [
  '$rootScope', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        var $window, Timer, app, updateClass;
        app = $('#app');
        $window = $(window);
        ele.on('click', function(e) {
          if (app.hasClass('nav-min')) {
            app.removeClass('nav-min');
          } else {
            app.addClass('nav-min');
            $rootScope.$broadcast('minNav:enabled');
          }
          return e.preventDefault();
        });
        Timer = 0;
        updateClass = function() {
          var width;
          width = $window.width();
          if (768 > width) {
            return app.removeClass('nav-min');
          }
        };
        return $window.resize(function() {
          var t;
          clearTimeout(t);
          return t = setTimeout(updateClass, 300);
        });
      }
    };
  }
]);

//# sourceMappingURL=toggleMinNav.js.map
;angular.module('minelogApp').directive('toggleOffCanvas', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        return ele.on('click', function() {
          return $('#app').toggleClass('on-canvas');
        });
      }
    };
  }
]);

//# sourceMappingURL=toggleOffCanvas.js.map
;angular.module('minelogApp').factory('localize', [
  '$http', '$rootScope', '$window', function($http, $rootScope, $window) {
    var localize;
    return localize = {
      language: '',
      url: void 0,
      resourceFileLoaded: false,
      successCallback: function(data) {
        localize.dictionary = data;
        localize.resourceFileLoaded = false;
        return $rootScope.$broadcast('localizeResourcesUpdated');
      },
      setLanguage: function(value) {
        localize.language = value.toLowerCase().split('-')[0];
        return localize.initLocalizedResources();
      },
      setUrl: function(value) {
        localize.url = value;
        return localize.initLocalizedResources();
      },
      buildUrl: function() {
        if (!localize.language) {
          localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase();
          localize.language = localize.language.split("-")[0];
        }
        return "i18n/resources-locale_" + localize.language + ".js";
      },
      initLocalizedResources: function() {
        var url;
        if (localize.url) {
          return url = localize.url;
        } else {
          url = localize.buildUrl();
          return $http.get(url).success(localize.successCallback).error(function() {
            return $rootScope.$broadcast('localizeResourcesUpdated');
          });
        }
      },
      getLocalizedString: function(value) {
        var result, valueLowerCase;
        result = void 0;
        if (localize.dictionary && value) {
          valueLowerCase = value.toLowerCase();
          if ('' === localize.dictionary[valueLowerCase]) {
            result = value;
          } else {
            result = localize.dictionary[valueLowerCase];
          }
        } else {
          result = value;
        }
        return result;
      }
    };
  }
]);

//# sourceMappingURL=localize.js.map
;angular.module('minelogApp').factory('logger', [
  function() {
    var logIt;
    toastr.options = {
      closeButton: void 0,
      positionClass: 'toast-bottom-right',
      timeOut: '5000'
    };
    logIt = function(message, type) {
      return toastr[type](message);
    };
    return {
      log: function(message) {
        return logIt(message, 'info');
      },
      logWarning: function(message) {
        return logIt(message, 'warning');
      },
      logSuccess: function(message) {
        return logIt(message, 'success');
      },
      logError: function(message) {
        return logIt(message, 'error');
      }
    };
  }
]);

//# sourceMappingURL=logger.js.map
;angular.module('minelogApp').factory('socket', function($rootScope) {
  var socket;
  socket = io.socket;
  return {
    on: function(eventName, callback) {
      return io.socket.on(eventName, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    emit: function(eventName, data, callback) {
      return io.socket.emit(eventName, data, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    get: function(url, callback) {
      return io.socket.get(url, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    post: function(url, callback) {
      return io.socket.post(url, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    put: function(url, callback) {
      return io.socket.put(url, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    "delete": function(url, callback) {
      return io.socket["delete"](url, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    },
    removeListener: function(eventName, callback) {
      return io.socket.removeListener(eventName, function() {
        var args;
        args = arguments;
        return $rootScope.$apply(function() {
          if (callback) {
            return callback.apply(io.socket, args);
          }
        });
      });
    }
  };
});

//# sourceMappingURL=socket.js.map
