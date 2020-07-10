function WeaponsController() {
    const ctrl = this;
    
    ctrl.$onInit = function () {
        ctrl.weaponSelected = 0;
        console.log('Weapons in Controller: ', ctrl.weapons);
    }
    
    ctrl.saveData = function (weapons) {
        console.log(weapons);
        return weapons.save().then(function(result) {
            console.log(result);
        });
    }
    
    ctrl.loadData = function() {
        ctrl.weaponSelected = document.getElementById("weapon").selectedIndex;
        console.log(ctrl.weaponSelected);
        return ctrl.weaponSelected;
    }
}

angular
    .module('components.weapons')
    .controller('WeaponsController', WeaponsController);