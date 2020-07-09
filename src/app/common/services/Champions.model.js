/* Model and helper methods for the Champions parse object */

class ChampionsModel {
    constructor(Parse) {
        this.Parse = Parse;
        this.data = {};
        this.collection = [];
        this.name = 'Champions';
        this.fields = [
            'name',
            'health',
            'healthPerLv',
            'healthRegen',
            'healthRegenPerLv',
            'armor',
            'armorPerLv',
            'magicResist',
            'magicResistPerLv',
            'attackDamage',
            'attackDamagePerLv',
            'attackSpeed',
            'attackSpeedPerLv'
        ];
    }
    
    New(obj) {
        if (angular.isUndefined(obj)) {
            const parseObject = new this.Parse.Object(this.name);
            this.Parse.defineAttributes(parseObject, this.fields);
            return ParseObject;
        } else {
            this.Parse.defineAttributes(obj, this.fields);
            return obj;
        }
    }
    
    getById(id) {
        return new this.Parse.Query(this.New())
            .get(id)
            .then(result => {
                this.Parse.defineAttributes(result, this.fields);
                this.data = result;
                return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }
    
    getAllChampions() {
        return new this.Parse.Query(this.New())
            .find(results => {
                results.forEach(result =>
                    this.Parse.defineAttributes(result, this.fields)
                );
                this.data = results;
                return Promise.resolve(results);
            })
            .catch(error => Promise.reject(error));
    }
}

angular
    .module('common')
    .service('ChampionsModel', ChampionsModel);