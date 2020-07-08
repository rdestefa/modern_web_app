var weapons = {
    templateUrl: './weapons.html',
    controller: 'WeaponsController',
    bindings: {
        weapons: '<'
    }
};

angular
    .module('components.weapons')
    .component('weapons', weapons)
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('weapons', {
                url: 'weapons',
                component: 'weapons',
                parent: 'app',
                resolve: {
                    weapons: function(WeaponsModel) {
                        console.log('Load Weapons');
                        return WeaponsModel.getAllWeapons();
                    }
                }
            })
    });