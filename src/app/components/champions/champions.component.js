var champions = {
    templateUrl: './champions.html',
    controller: 'ChampionsController',
    bindings: {
        champions: '<',
        newChampion: '<',
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
                data: {
                    requiredAuth: true
                },
                component: 'champions',
                parent: 'app',
                resolve: {
                    champions: function(ChampionsModel) {
                        console.log('Load Champions');
                        return ChampionsModel.getAllChampions();
                    },
                    newChampion: function(ChampionsModel) {
                        return ChampionsModel.New();
                    }
                }
            })
    });