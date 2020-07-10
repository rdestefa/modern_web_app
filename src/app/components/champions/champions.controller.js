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
    
    // Create new champion in Parse database
    ctrl.newChamp = function() {
        ctrl.newChampion.set('name', document.getElementById("new_name").value);
        ctrl.newChampion.set('health', Number(document.getElementById("new_hp").value));
        ctrl.newChampion.set('healthPerLv', Number(document.getElementById("new_hp_lv").value));
        ctrl.newChampion.set('healthRegen', Number(document.getElementById("new_hp_regen").value));
        ctrl.newChampion.set('healthRegenPerLv', Number(document.getElementById("new_hp_regen_lv").value));
        ctrl.newChampion.set('armor', Number(document.getElementById("new_armor").value));
        ctrl.newChampion.set('armorPerLv', Number(document.getElementById("new_armor_lv").value));
        ctrl.newChampion.set('magicResist', Number(document.getElementById("new_mr").value));
        ctrl.newChampion.set('magicResistPerLv', Number(document.getElementById("new_mr_lv").value));
        ctrl.newChampion.set('attackDamage', Number(document.getElementById("new_ad").value));
        ctrl.newChampion.set('attackDamagePerLv', Number(document.getElementById("new_ad_lv").value));
        ctrl.newChampion.set('attackSpeed', Number(document.getElementById("new_as").value));
        ctrl.newChampion.set('attackSpeedPerLv', Number(document.getElementById("new_as_lv").value));
        
        ctrl.newChampion.save()
        console.log('Saved ' + ctrl.newChampion.name)
    }
}

angular
    .module('components.champions')
    .controller('ChampionsController', ChampionsController);