function WeaponsController() {
    const ctrl = this;
    
    ctrl.$onInit = function () {
        console.log('Weapons in Controller: ', ctrl.weapons);
    }
    
    ctrl.refreshData = function() {
        ctrl.healthValue = ctrl.weapons.getById(document.getElementById("weapon").value).health;
        ctrl.healthRegenValue = ctrl.weapons.getById(document.getElementById("weapon").value).healthRegen;
        ctrl.armorValue = ctrl.weapons.getById(document.getElementById("weapon").value).armor;
        ctrl.magicResistValue = ctrl.weapons.getById(document.getElementById("weapon").value).magicResist;
        ctrl.attackDamageValue = ctrl.weapons.getById(document.getElementById("weapon").value).attackDamage;
        ctrl.attackSpeedValue = ctrl.weapons.getById(document.getElementById("weapon").value).attackSpeed;
    }

    ctrl.refreshData;
}

angular
    .module('components.weapons')
    .controller('WeaponsController', WeaponsController);