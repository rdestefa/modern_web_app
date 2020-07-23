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

    function buildDelayedToggler(navID) {
        return debounce(function() {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    console.log("toggle " + navID + " is done");
                });
        }, 200);
    }

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
    ctrl.isOpenRight = function() {
        return $mdSidenav('right').isOpen();
    }
    ctrl.isOpenLeft  = function() {
        return $mdSidenav('left').isOpen();
    }

    ctrl.closeLeft = function() {
        $mdSidenav('left').close()
            .then(function() {
                console.log("Left nav is closed");
            });
    };

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
