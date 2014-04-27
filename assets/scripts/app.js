(function () {
    "use strict";
    angular.module("app", ["ngRoute", "ngAnimate", "textAngular", "ui.bootstrap", "app.controllers", "app.directives", "app.localization"])
    .config(["$routeProvider",
        function ($routeProvider) {
            return $routeProvider.when("/", {
                redirectTo: "/dashboard"
            }).when("/dashboard", {
                templateUrl: "dashboard"
            }).when("/feedback", {
                templateUrl: "feedback"
            }).when("/faq", {
                templateUrl: "faq"
            }).when("/servers", {
                templateUrl: "servers"
            }).when("/players", {
                templateUrl: "players"
            }).when("/profile/:id", {
                templateUrl: "profile"
            }).when("/server/:id", {
                templateUrl: "server"
            }).when("/404", {
                templateUrl: "404"
            }).when("/500", {
                templateUrl: "500"
            }).otherwise({
                redirectTo: "404"
            })
        }
    ])
}.call(this),
function () {
    angular.module("app.directives", []).directive("customBackground", function () {
        return {
            restrict: "A",
            controller: ["$scope", "$element", "$location",
                function ($scope, $element, $location) {
                    var addBg, path;
                    return path = function () {
                        return $location.path()
                    }, addBg = function (path) {
                        switch ($element.removeClass("body-home body-special body-tasks body-lock"), path) {
                        case "/":
                            return $element.addClass("body-home");
                        case "/404":
                        case "/500":
                            return $element.addClass("body-special");
                        }
                    }, addBg($location.path()), $scope.$watch(path, function (newVal, oldVal) {
                        return newVal !== oldVal ? addBg($location.path()) : void 0
                    })
                }
            ]
        }
    }).directive("toggleMinNav", ["$rootScope",
        function ($rootScope) {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    var $window, Timer, app, updateClass;
                    return app = $("#app"), $window = $(window), ele.on("click", function (e) {
                        return app.hasClass("nav-min") ? app.removeClass("nav-min") : (app.addClass("nav-min"), $rootScope.$broadcast("minNav:enabled")), e.preventDefault()
                    }), Timer = void 0, updateClass = function () {
                        var width;
                        return width = $window.width(), 768 > width ? app.removeClass("nav-min") : void 0
                    }, $window.resize(function () {
                        var t;
                        return clearTimeout(t), t = setTimeout(updateClass, 300)
                    })
                }
            }
        }
    ]).directive("collapseNav", [
        function () {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    var $a, $aRest, $lists, $listsRest, app;
                    return $lists = ele.find("ul").parent("li"), $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>'), $a = $lists.children("a"), $listsRest = ele.children("li").not($lists), $aRest = $listsRest.children("a"), app = $("#app"), $a.on("click", function (event) {
                        var $parent, $this;
                        return app.hasClass("nav-min") ? !1 : ($this = $(this), $parent = $this.parent("li"), $lists.not($parent).removeClass("open").find("ul").slideUp(), $parent.toggleClass("open").find("ul").slideToggle(), event.preventDefault())
                    }), $aRest.on("click", function () {
                        return $lists.removeClass("open").find("ul").slideUp()
                    }), scope.$on("minNav:enabled", function () {
                        return $lists.removeClass("open").find("ul").slideUp()
                    })
                }
            }
        }
    ]).directive("highlightActive", [
        function () {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", "$location",
                    function ($scope, $element, $attrs, $location) {
                        var highlightActive, links, path;
                        return links = $element.find("a"), path = function () {
                            return $location.path()
                        }, highlightActive = function (links, path) {
                            return path = "#" + path, angular.forEach(links, function (link) {
                                var $li, $link, href;
                                return $link = angular.element(link), $li = $link.parent("li"), href = $link.attr("href"), $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href) ? $li.addClass("active") : void 0
                            })
                        }, highlightActive(links, $location.path()), $scope.$watch(path, function (newVal, oldVal) {
                            return newVal !== oldVal ? highlightActive(links, $location.path()) : void 0
                        })
                    }
                ]
            }
        }
    ]).directive("toggleOffCanvas", [
        function () {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    return ele.on("click", function () {
                        return $("#app").toggleClass("on-canvas")
                    })
                }
            }
        }
    ]).directive("slimScroll", [
        function () {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    return ele.slimScroll({
                        height: "100%"
                    })
                }
            }
        }
    ]).directive("goBack", [
        function () {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$window",
                    function ($scope, $element, $window) {
                        return $element.on("click", function () {
                            return $window.history.back()
                        })
                    }
                ]
            }
        }
    ])
}.call(this),
function () {
    "use strict";
    angular.module("app.localization", []).factory("localize", ["$http", "$rootScope", "$window",
        function ($http, $rootScope, $window) {
            var localize;
            return localize = {
                language: "",
                url: void 0,
                resourceFileLoaded: !1,
                successCallback: function (data) {
                    return localize.dictionary = data, localize.resourceFileLoaded = !0, $rootScope.$broadcast("localizeResourcesUpdated")
                },
                setLanguage: function (value) {
                    return localize.language = value.toLowerCase().split("-")[0], localize.initLocalizedResources()
                },
                setUrl: function (value) {
                    return localize.url = value, localize.initLocalizedResources()
                },
                buildUrl: function () {
                    return localize.language || (localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase(), localize.language = localize.language.split("-")[0]), "i18n/resources-locale_" + localize.language + ".js"
                },
                initLocalizedResources: function () {
                    var url;
                    return url = localize.url || localize.buildUrl(), $http({
                        method: "GET",
                        url: url,
                        cache: !1
                    }).success(localize.successCallback).error(function () {
                        return $rootScope.$broadcast("localizeResourcesUpdated")
                    })
                },
                getLocalizedString: function (value) {
                    var result, valueLowerCase;
                    return result = void 0, localize.dictionary && value ? (valueLowerCase = value.toLowerCase(), result = "" === localize.dictionary[valueLowerCase] ? value : localize.dictionary[valueLowerCase]) : result = value, result
                }
            }
        }
    ]).directive("i18n", ["localize",
        function (localize) {
            var i18nDirective;
            return i18nDirective = {
                restrict: "EA",
                updateText: function (ele, input, placeholder) {
                    var result;
                    return result = void 0, "i18n-placeholder" === input ? (result = localize.getLocalizedString(placeholder), ele.attr("placeholder", result)) : input.length >= 1 ? (result = localize.getLocalizedString(input), ele.text(result)) : void 0
                },
                link: function (scope, ele, attrs) {
                    return scope.$on("localizeResourcesUpdated", function () {
                        return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder)
                    }), attrs.$observe("i18n", function (value) {
                        return i18nDirective.updateText(ele, value, attrs.placeholder)
                    })
                }
            }
        }
    ]).controller("LangCtrl", ["$scope", "localize",
        function ($scope, localize) {
            localize.setLanguage('EN-US');
            return $scope.lang = "English", $scope.setLang = function (lang) {
                switch (lang) {
                    case "English":
                        localize.setLanguage("EN-US");
                        break;
                    case "Français":
                        localize.setLanguage("FR-FR");
                        break;
                }
                return $scope.lang = lang;
            };
        }
    ])
}.call(this),
function () {
    "use strict";
    angular.module("app.controllers", ['ngAnimate'])
    .controller("AppCtrl", ["$scope", "$location",
        function ($scope, $location) {
            return $scope.isSpecificPage = function () {
                var path;
                return path = $location.path(), _.contains(["/404", "/500"], path)
            }, $scope.main = {
                brand: "MineLog"
            };
        }
    ]).controller("NavCtrl", ["$scope", "filterFilter",
        function ($scope, filterFilter) {}
    ]).factory('socket', function ($rootScope) {
      var socket = io.socket;
      return {
        on: function (eventName, callback) {
          socket.on(eventName, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              callback.apply(socket, args);
            });
          });
        },
        emit: function (eventName, data, callback) {
          socket.emit(eventName, data, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              if (callback) {
                callback.apply(socket, args);
              }
            });
          })
        },
        get: function (url, callback) {
          socket.get(url, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              if (callback) {
                callback.apply(socket, args);
              }
            });
          })
        },
        post: function (url, callback) {
          socket.post(url, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              if (callback) {
                callback.apply(socket, args);
              }
            });
          })
        },
        put: function (url, callback) {
          socket.put(url, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              if (callback) {
                callback.apply(socket, args);
              }
            });
          })
        },
        delete: function (url, callback) {
          socket.delete(url, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              if (callback) {
                callback.apply(socket, args);
              }
            });
          })
        },
        removeListener: function (eventName, callback) {
          socket.removeListener(eventName, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              if (callback) {
                callback.apply(socket, args);
              }
            });
          })
        },
      };
    }).controller("DashboardCtrl", ["$scope", "socket", function($scope, socket) {
      var subscribe = function() {
        socket.get('/dashboard/GlobalSubscribe', function(counters) {
          $scope.counters = counters;
        });
        socket.get('/dashboard/TopServersSubscribe', function(data) {
          $scope.servers = data.servers;
        });
        socket.get('/dashboard/TopPlayersSubscribe', function(data) {
          $scope.players = data.players;
        });
      };
      var unsubscribe = function() {
        socket.get('/dashboard/GlobalUnsubscribe', function(data) {});
        socket.get('/dashboard/TopServersUnsubscribe', function(data) {});
        socket.get('/dashboard/TopPlayersUnsubscribe', function(data) {});
        socket.removeListener('globalDashboardUpdate');
        socket.removeListener('topPlayersDashboardUpdate');
        socket.removeListener('topServersDashboardUpdate');
      };

      socket.on('globalDashboardUpdate', function(data) {
        $scope.counters = data;
      });

      socket.on('topPlayersDashboardUpdate', function(data) {
        $scope.players = data.players;
      });

      socket.on('topServersDashboardUpdate', function(data) {
        $scope.servers = data.servers;
      });

      subscribe();
      $scope.$on('$destroy', function(){
        unsubscribe();
      });
      }
    ]).controller("ServersListCtrl", ["$scope", "$http", "socket", function($scope, $http, socket) {
        var subscribe = function() {
          socket.get('/serversList/ServersListSubscribe', function(servers) {
            $scope.servers = servers;
          });
        }
        var unsubscribe = function() {
            socket.get('/serversList/ServersListUnsubscribe', function(data) {});
            socket.removeListener('serversListUpdate');
        }
        $http({method: 'GET', url: '/serversList/serverNames'}).success(function(serverNames) {
            $scope.serverNames = serverNames;
        });
        socket.on('serversListUpdate', function(servers) {
            $scope.servers = servers;
        });
        subscribe();
        $scope.$on('$destroy', function(){
            unsubscribe();
        });
    }]).controller("PlayersListCtrl", ["$scope", "$http", "socket", function($scope, $http, socket) {
        var subscribe = function() {
            socket.get('/playersList/PlayersListSubscribe', function(players) {
                $scope.players = players;
            });
        }
        var unsubscribe = function() {
            socket.get('/playersList/PlayersListUnsubscribe', function(data) {});
            socket.removeListener('playersListUpdate');
        }
        $http({method: 'GET', url: '/playersList/playerNames'}).success(function(playerNames) {
            $scope.playerNames = playerNames;
        });
        socket.on('playersListUpdate', function(players) {
            $scope.players = players;
        });
        $scope.loadMore = function() {
          console.log("YEAH");
          /*
          var last = $scope.images[$scope.images.length - 1];
          for(var i = 1; i <= 8; i++) {
            $scope.images.push(last + i);
          }
          */
        };
        subscribe();
        $scope.$on('$destroy', function(){
            unsubscribe();
        });

    }]).controller("PlayerCtrl", ["$scope", "$http", "socket", "$routeParams", "$location", function($scope, $http, socket, $routeParams, $location) {
        $http({method: 'GET', url: '/player/player?id='+$routeParams.id }).success(function(player) {
            if(player === '0') {
                $location.path("500");
            }
            $scope.player = player;
            console.log(player);
        });
    }])
}).call(this);
