angular
  .module('components.auth', [
    'ui.router',
    'ngParse'
  ])
  .run(function ($transitions, $state, AuthService) {
    // Check authentication every time the state changes
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
        // If user is not authenticated, redirect them to the login page
        .requireAuthentication()
        .catch(function () {
          return $state.target('auth.login');
        });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });