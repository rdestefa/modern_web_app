function AuthFormController() {
  var ctrl = this;
  ctrl.$onChanges = function (changes) {
    if (changes.user) {
      ctrl.user = angular.copy(ctrl.user);
    }
  };
    
  // Create user on button press
  ctrl.submitForm = function () {
    ctrl.onSubmit({
      $event: {
        user: ctrl.user
      }
    });
  };
}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController);