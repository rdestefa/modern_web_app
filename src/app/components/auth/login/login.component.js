var login = {
  templateUrl: './login.html',
  controller: 'LoginController'
};

angular
  .module('components.auth')
  .component('login', login)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('auth', {              // Why auth AND auth.login?
        redirectTo: 'auth.login',
        url: '/auth', /// auth?
        template: '<div ui-view></div>'
      })
      .state('auth.login', {
        url: '/login', /// login?
        component: 'login'
      });
    $urlRouterProvider.otherwise('/auth/login');
  });