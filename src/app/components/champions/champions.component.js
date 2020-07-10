var champions = {
    templateUrl: './champions.html',
    controller: 'ChampionsController',
    bindings: {
        champions: '<',
        level: '='
    }
};

angular
    .module('components.champions')
    .component('champions', champions)
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('champions', {
                url: 'champions',
                component: 'champions',
                parent: 'app',
                resolve: {
                    champions: function(ChampionsModel) {
                        console.log('Load Champions');
                        return ChampionsModel.getAllChampions();
                    }
                }
            })
    });