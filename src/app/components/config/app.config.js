angular
    .module('components.config'), [
        'ui.router',
        'ngParse',
        'ngMaterial',
        'ngMessages'
    ])
    .config(function($locationProvider, $mdThemingProvider, ParseProvider) {
        var MY_PARSE_APP_ID = 'Sv6nNlAXW78dXVhpBcyHQjlBBMESfIOhazxLYVJA';
        var MY_PARSE_JS_KEY = '0TzdpfVjyzW7yOUWMSSdeKdcN6Ybw6nOwadqnIs4';
        ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
        ParseProvider.serverURL = 'https://parseapi.back4app.com/';
    });
