/* Model and helped methods for the Weapons parse object */

class ArmorModel { ////////////////////
    constructor(Parse) {
        this.Parse = Parse;
        this.data = {};
        this.collection = [];
        this.name = 'Armor'; ///////////////
        this.fields = [
            'name',
            'health',
            'healthRegen',
            'armor',
            'magicResist',
            'attackDamage',
            'attackSpeed'
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
    
    //getAllArmor()
}

angular
    .module('common')
    .service('ArmorModel', ArmorModel); ////////////////////////////
