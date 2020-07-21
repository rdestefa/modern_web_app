function AuthService(Parse) {

  // Create new Parse object
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
    
  // Wipe all data on logout
  function clearAuthData() {
    authData = null;
  }
    
  // Authenticate and log in user
  this.login = function (user) {
    console.log("user in auth service", user)
    return Parse.User
      .logIn(user.email, user.password)
      .then(function(user) {
        console.log(user.username + ' logged in');
    }).then(storeAuthData)
  };
    
  // Add new user to Parse database
  this.register = function (user) {
    auth.set("username", user.username);
    auth.set("password", user.password);
    auth.set("email", user.email);
    return auth
      .signUp()
      .then(storeAuthData);
  };
    
  // Log out user
  this.logout = function () {
    return Parse.User
      .logOut()
      .then(clearAuthData);
  };
    
  // Prevents navigation without proper authentication
  this.requireAuthentication = function () {
      var the_user = Parse.User.current();
      console.log(the_user);
      
      return new Promise(function(resolve, reject) {
          if (!!the_user && the_user.authenticated()) {
              resolve();
          } else {
              reject();
          }
      });
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