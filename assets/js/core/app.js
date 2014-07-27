angular.module('minelogApp', ['ngRoute', 'ngAnimate']).config([
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
