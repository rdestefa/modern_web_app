function LoginController(AuthService, $state) {
  var ctrl = this;
    
  // Initialize data
  ctrl.$onInit = function () {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: '',
      username: ''
    };
  };
    
  // Login user then send them to the app
  ctrl.loginUser = function (event) {
    console.log(event)
    console.log(event.user)

    AuthService
      .login(event.user)
      .then(function () {
        console.log('we here');
        $state.go('app');
      });
  };
}

angular
  .module('components.auth')
  .controller('LoginController', LoginController);