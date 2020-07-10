function ArmorController() {
    const ctrl = this;
    
    ctrl.$onInit = function () {
        ctrl.armorSelected = 0;
        console.log('Armor in Controller: ', ctrl.armor);
    }
    
    // Save data to Parse database
    ctrl.saveData = function (armor, index) {
        console.log(armor);
        console.log(index);
        return armor.save().then(function(result) {
            console.log(result);
        });
    }
    
    // Update selected value
    ctrl.loadData = function() {
        ctrl.armorSelected = document.getElementById("armor").selectedIndex;
        console.log(ctrl.armorSelected);
        return ctrl.armorSelected;
    }
}

angular
    .module('components.armor')
    .controller('ArmorController', ArmorController);