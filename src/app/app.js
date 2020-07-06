/* eslint-env es6 */
/* global angular */
var myApp = angular.module('app', ['ngMaterial', 'ngMessages']);

// Initialize levels object for component
const levels = {
    templateUrl: './templates/level_counter.html',
    controller: 'LevelController', 
    bindings: {
        level: '='
    }
}

// Used to change the level
myApp.controller('LevelController', function() {
    const ctrl = this;
    
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
});

// Initialize component
myApp.component('levels', levels);

// Initialize items object for items component
const items = {
    templateUrl: './templates/item_list.html',
    controller: 'ItemController'
}

myApp.component('items', items);

// Controller that fetches data from item_data.json
myApp.controller('ItemController', ['$http', 'GetLeagueData', function($http, GetLeagueData) {
    const ctrl = this;
    
    // Acquire Data
    ctrl.refreshData = function() {
        GetLeagueData.getData().then(function(data) {
        ctrl.data = data.data;
        
        ctrl.armorStr = document.getElementById("armor").value;
        ctrl.weaponStr = document.getElementById("weapon").value;
        
        if (ctrl.armorStr == "sunfire_cape") {
            ctrl.health = ctrl.data.armor.sunfire_cape.health;
            ctrl.armor = ctrl.data.armor.sunfire_cape.armor;
            ctrl.magic_resist = ctrl.data.armor.sunfire_cape.magic_resist;
            ctrl.attack_damage = ctrl.data.armor.sunfire_cape.attack_damage;
        } else if (ctrl.armorStr == "dead_mans_plate") {
            ctrl.health = ctrl.data.armor.dead_mans_plate.health;
            ctrl.armor = ctrl.data.armor.dead_mans_plate.armor;
            ctrl.magic_resist = ctrl.data.armor.dead_mans_plate.magic_resist;
            ctrl.attack_damage = ctrl.data.armor.dead_mans_plate.attack_damage;
        } else if (ctrl.armorStr == "spirit_visage") {
            ctrl.health = ctrl.data.armor.spirit_visage.health;
            ctrl.armor = ctrl.data.armor.spirit_visage.armor;
            ctrl.magic_resist = ctrl.data.armor.spirit_visage.magic_resist;
            ctrl.attack_damage = ctrl.data.armor.spirit_visage.attack_damage;
        }
        
        if (ctrl.weaponStr == "ravenous_hydra") {
            ctrl.health = ctrl.health + ctrl.data.weapons.ravenous_hydra.health;
            ctrl.armor = ctrl.armor + ctrl.data.weapons.ravenous_hydra.armor;
            ctrl.magic_resist = ctrl.magic_resist + ctrl.data.weapons.ravenous_hydra.magic_resist;
            ctrl.attack_damage = ctrl.attack_damage + ctrl.data.weapons.ravenous_hydra.attack_damage;
        } else if (ctrl.weaponStr == "titanic_hydra") {
            ctrl.health = ctrl.health + ctrl.data.weapons.titanic_hydra.health;
            ctrl.armor = ctrl.armor + ctrl.data.weapons.titanic_hydra.armor;
            ctrl.magic_resist = ctrl.magic_resist + ctrl.data.weapons.titanic_hydra.magic_resist;
            ctrl.attack_damage = ctrl.attack_damage + ctrl.data.weapons.titanic_hydra.attack_damage;
        } else if (ctrl.weaponStr == "the_black_cleaver") {
            ctrl.health = ctrl.health + ctrl.data.weapons.the_black_cleaver.health;
            ctrl.armor = ctrl.armor + ctrl.data.weapons.the_black_cleaver.armor;
            ctrl.magic_resist = ctrl.magic_resist + ctrl.data.weapons.the_black_cleaver.magic_resist;
            ctrl.attack_damage = ctrl.attack_damage + ctrl.data.weapons.the_black_cleaver.attack_damage;
        }
    })};
    
    ctrl.refreshData;
}])

// Function for custom service
function GetLeagueData($http) {
    var self = this;
    self.getData = getData;
    var item_url = './item_data.json';
    
    function getData() {
        return $http({
            method: 'GET',
            url: item_url            
        });
    }
}

// Intializing and injecting to custom service
myApp.service('GetLeagueData', GetLeagueData);
GetLeagueData.$inject = ['$http'];
