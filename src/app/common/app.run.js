function init($rootScope, $uiRouter, $mdSidenav, $timeout, $log) {
    var Visualizer = window['ui-router-visualizer'].Visualizer;
    var pluginInstance = $uiRouter.plugin(Visualizer);
    
    $rootScope.isEmpty = isEmpty;

// Utility function for checking if JS object is empty
    function isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
    
        return true;
    }
}

angular
    .module('common')
    .run(init)