var armor = {
    templateUrl: './armor.html',
    controller: 'ArmorController',
    bindings: {
        armor: '<'
    }
};

angular
    .module('components.armor')
    .component('armor', armor)
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('armor', {
                url: 'armor',
                data: {
                    requiredAuth: true
                },
                component: 'armor',
                parent: 'app',
                resolve: {
                    armor: function(ArmorModel) {
                        console.log('Load Armor');
                        return ArmorModel.getAllArmor();
                    }
                }
            })
    });