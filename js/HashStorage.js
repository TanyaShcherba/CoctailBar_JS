`use strict`;

function barHashStorage(key, value) {
    let select = this;

    select.hashStorage = { };

    select.addValue = function(key, value) {
        select.hashStorage[key] = value;
    }

    select.getValue = function(key) {
        if(key in select.hashStorage) {
            return select.hashStorage[key];
        } 
        else {
            return undefined;
        }
    }

    select.deleteValue = function(key) {
        if(key in select.hashStorage) {
            delete select.hashStorage[key];
            return true;
        }
        else {
            return false;
        }
    }

    select.getKeys = function() {
        let keys = [];
        for(let key in select.hashStorage){
            keys.push(key);
        }
        return keys;
    }
}


