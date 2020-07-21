function RegisterController(AuthService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: '',
      username: ''
    };
  };
    
  // Create user then send them to login
  ctrl.createUser = function (event) {
    AuthService
      .register(event.user)
      .then(function () {
        $state.go('auth');
      });
  };
}

angular
  .module('components.auth')
  .controller('RegisterController', RegisterController);