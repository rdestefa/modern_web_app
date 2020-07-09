function ChampionsController() {
    const ctrl = this;
    
    ctrl.$onInit = function () {
        console.log('Champions in Controller: ', ctrl.champions);
    }
    
    ctrl.refreshData = function() {
        ctrl.healthValue = ctrl.champions.getById(document.getElementById("champion").value).health + ctrl.level * ctrl.champions.getById(document.getElementById("champion").value).healthPerLv;
        ctrl.healthRegenValue = ctrl.champions.getById(document.getElementById("champion").value).healthRegen + ctrl.level * ctrl.champions.getById(document.getElementById("champion").value).healthRegenPerLv;
        ctrl.armorValue = ctrl.champions.getById(document.getElementById("champion").value).armor + ctrl.level * ctrl.champions.getById(document.getElementById("champion").value).armorPerLv;
        ctrl.magicResistValue = ctrl.champions.getById(document.getElementById("champion").value).magicResist + ctrl.level * ctrl.champions.getById(document.getElementById("champion").value).magicResistPerLv;
        ctrl.attackDamageValue = ctrl.champions.getById(document.getElementById("champion").value).attackDamage + ctrl.level * ctrl.champions.getById(document.getElementById("champion").value).attackDamagePerLv;
        ctrl.attackSpeedValue = ctrl.champions.getById(document.getElementById("champion").value).attackSpeed + ctrl.level * ctrl.champions.getById(document.getElementById("champion").value).attackSpeedPerLv;
    };
    
    ctrl.increment = function () {      
        if (ctrl.level < 18) {
            ctrl.level = ctrl.level + 1;
        }
        return ctrl.level;
    };
    
    ctrl.decrement = function () {
        if (ctrl.level > 1) {
            ctrl.level = ctrl.level - 1;
        }
        return ctrl.level;
    };

    ctrl.refreshData;
}

angular
    .module('components.champions')
    .controller('ChampionsController', ChampionsController);