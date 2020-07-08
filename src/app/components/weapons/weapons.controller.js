function WeaponsController() {
    const ctrl = this;
    
    ctrl.$onInit = function () {
        console.log('Weapons in Controller: ', ctrl.weapons);
    }
}

angular
    .module('components.weapons')
    .controller('WeaponsController', WeaponsController);