function AuthService(Parse) {
  var auth = new Parse.User();
  var authData = null;
    
  function storeAuthData(response) {
    authData = response;
    return authData;
  }
    
  function onSignIn(user) {
    authData = user;
    return authData.authenticated();
  }
    
  function clearAuthData() {
    authData = null;
  }
    
  this.login = function (user) {
    console.log("user in auth service", user)
    return auth
      .logIn(user.email, user.password)
      .then(storeAuthData);
  };
    
  this.register = function (user) {
    auth.set("username", user.email);
    auth.set("password", user.password);
    auth.set("email", user.email);
    return auth
      .signUp()
      .then(storeAuthData);
  };
    
  this.logout = function () {
    return Parse.User
      .logOut()
      .then(clearAuthData);
  };
    
  this.requireAuthentication = function () {
      return Promise.resolve(auth.authenticated()).then(onSignIn);
  };

  this.isAuthenticated = function () {
    return !!authData;
  };
    
  this.getUser = function () {
    if (authData) {
      return authData;
    }
  };
}

angular
  .module('components.auth')
  .service('AuthService', AuthService);