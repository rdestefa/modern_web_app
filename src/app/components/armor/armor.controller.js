function ArmorController() {
    const ctrl = this;
    
    ctrl.$onInit = function () {
        console.log('Armor in Controller: ', ctrl.armor);
    }
    
    ctrl.refreshData = function() {
        ctrl.healthValue = ctrl.armor.getById(document.getElementById("armor").value).health;
        ctrl.healthRegenValue = ctrl.armor.getById(document.getElementById("armor").value).healthRegen;
        ctrl.armorValue = ctrl.armor.getById(document.getElementById("armor").value).armor;
        ctrl.magicResistValue = ctrl.armor.getById(document.getElementById("armor").value).magicResist;
        ctrl.attackDamageValue = ctrl.armor.getById(document.getElementById("armor").value).attackDamage;
        ctrl.attackSpeedValue = ctrl.armor.getById(document.getElementById("armor").value).attackSpeed;
    }

    ctrl.refreshData;
}

angular
    .module('components.armor')
    .controller('ArmorController', ArmorController);