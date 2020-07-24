function AppSidenavController($timeout, $mdSidenav) {
    var ctrl = this;

    function debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = ctrl,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    // Used to animate the left sidenav when it is toggled
    function buildDelayedToggler(navID) {
        return debounce(function() {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    console.log("toggle " + navID + " is done");
                });
        }, 200);
    }

    // Used to animate the right sidenav when it is toggled
    function buildToggler(navID) {
        return function() {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    console.log("toggle " + navID + " is done");
                });
        };
    }

    ctrl.toggleLeft  = buildDelayedToggler('left')
    ctrl.toggleRight = buildToggler('right')
    
    // Checks to see if each sidenav is open
    ctrl.isOpenRight = function() {
        return $mdSidenav('right').isOpen();
    }
    ctrl.isOpenLeft  = function() {
        return $mdSidenav('left').isOpen();
    }

    // Close the left sidenav
    ctrl.closeLeft = function() {
        $mdSidenav('left').close()
            .then(function() {
                console.log("Left nav is closed");
            });
    };

    // Close the right sidenav
    ctrl.closeRight = function() {
        $mdSidenav('right').close()
            .then(function() {
                console.log("Right nav is closed");
            });
    };
}

angular
    .module('common')
    .controller('AppSidenavController', AppSidenavController);
