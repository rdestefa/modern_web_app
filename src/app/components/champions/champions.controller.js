function ChampionsController() {
    const ctrl = this;
    
    ctrl.$onInit = function () {
        ctrl.level = 1;
        ctrl.championSelected = 0;
        console.log('Champions in Controller: ', ctrl.champions);
    }
    
    // Save data to Parse database
    ctrl.saveData = function (champions) {
        console.log(champions);
        return champions.save().then(function(result) {
            console.log(result);
        });
    }
    
    // Refresh new data
    ctrl.loadData = function() {
        ctrl.championSelected = document.getElementById("champion").selectedIndex;
        console.log(ctrl.championSelected);
        return ctrl.championSelected;
    }
    
    // Increase level
    ctrl.increment = function () {      
        if (ctrl.level < 18) {
            ctrl.level = ctrl.level + 1;
        }
        return ctrl.level;
    };
    
    // Decrease level
    ctrl.decrement = function () {
        if (ctrl.level > 1) {
            ctrl.level = ctrl.level - 1;
        }
        return ctrl.level;
    };
    
    ctrl.newChampion = function() {
        var newData = {
            "name" : document.getElementById("new_name").value,
            "health" : document.getElementById("new_hp").value,
            "healthPerLv" : document.getElementById("new_hp_lv").value,
            "healthRegen" : document.getElementById("new_hp_regen").value,
            "healthRegenPerLv" : document.getElementById("new_hp_regen_lv").value,
            "armor" : document.getElementById("new_armor").value,
            "armorPerLv" : document.getElementById("new_armor_lv").value,
            "magicResist" : document.getElementById("new_mr").value,
            "magicResistPerLv" : document.getElementById("new_mr_lv").value,
            "attackDamage" : document.getElementById("new_ad").value,
            "attackDamagePerLv" : document.getElementById("new_ad_lv").value,
            "attackSpeed" : document.getElementById("new_as").value,
            "attackSpeedPerLv" : document.getElementById("new_as_lv").value
        }
        
        console.log(newData);
        
        champions.save(newData);
    }
}

angular
    .module('components.champions')
    .controller('ChampionsController', ChampionsController);