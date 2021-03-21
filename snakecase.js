const toSnakeCase = str =>
    str &&
    str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

var isArray = function(a) {
    return Array.isArray(a);
};

var isObject = function(o) {
    return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

var convertKeysToSnakeCase = function(o) {
    if (isObject(o)) {
        var n = {};

        Object.keys(o)
            .forEach((k) => {
                n[toSnakeCase(k)] = convertKeysToSnakeCase(o[k]);
            });

        return n;
    } else if (isArray(o)) {
        return o.map((i) => {
            return convertKeysToSnakeCase(i);
        });
    }

    return o;
};

function convertValuesToSnakeCase(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string') {
            obj[prop] = toSnakeCase(obj[prop]);
        }
        if (typeof obj[prop] === 'object') {
            convertValuesToSnakeCase(obj[prop]);
        }
    }
    return obj;
}

function extractKeysToSnakeCase(target, keysArr) {
    if (typeof target === 'object') {
        for (const key in target) {
            if (key && isNaN(key)) {
                keysArr.push(toSnakeCase(key));
            }
            extractKeysToSnakeCase(target[key], keysArr);
        }
    }
    return keysArr;
}

function extractValuesToSnakeCase(obj, resultObj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string' && obj[prop].length > 0) {
            resultObj.push(toSnakeCase(obj[prop]));
        }
        if (typeof obj[prop] === 'object') {
            extractValuesToSnakeCase(obj[prop], resultObj);
        }
        if (!isNaN(obj[prop])) {
            resultObj.push(obj[prop])
        }
    }
    return resultObj;
}

module.exports = {
    /**
     * Check whether the Given string value is SnakeCased or not.
     * @param {String} value 
     * @returns Boolean 
     */
    isSnakeCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return (value === toSnakeCase(value));
        }
        return false;
    },
    /**
     * Converts given value to snakecase .
     * @param {String} value 
     * @returns SnakeCased String value
     */
    getStringSnakeCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return toSnakeCase(value);
        }
        return value;
    },
    /**
     * Converts specific words in the String to snake case based on from and to index 
     * @param {String} value 
     * @param {Int} from 
     * @param {Int} to 
     * @returns SnakeCased String value for specific indexes.
     */
    getStringSnakeCasedWithPos: (value, from, to) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String) && (from != to || from == null)) {
            if (to == null) {
                value = value.replace(value.substring(from, value.length), toSnakeCase(value.substring(from, value.length)));
            } else {
                value = value.replace(value.substring(from, to), toSnakeCase(value.substring(from, to)));
            }
        }
        return value;
    },
    /**
     * Convert KEYS in the given JSON object to snakecase
     * @param {JSON} object 
     * @returns JSON Object with All KEYS converted to snakecase.
     */
    getObjectKeysSnakeCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return convertKeysToSnakeCase(object);
    },
    /**
     * Convert VALUES in the given JSON object to snakecase
     * @param {JSON} object 
     * @returns JSON Object with All VALUES converted to snakecase.
     */
    getObjectvaluesSnakeCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return convertValuesToSnakeCase(object);
    },
    /**
     * Convert Keys in the object to snakecase.
     * @param {JSON} object 
     * @returns Array of SnakeCased Object Keys.
     */
    getKeysSnakeCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractKeysToSnakeCase(object, []);
    },
    /**
     * Convert Values in the object to snakecase.
     * @param {JSON} object 
     * @returns Array of SnakeCased Object Values
     */
    getValuesSnakeCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractValuesToSnakeCase(object, []);
    },
    /**
     *  Convert all values in the array to snakecase
     * @param {Array} input 
     * @returns Array of SnakeCased values
     */
    getStringArraySnakeCased: (input) => {
        if (Array.isArray(input)) {
            let values = input.filter(item => item);
            return values.map(value => toSnakeCase(value));
        }
        return input;
    },
    /**
     * Convert specific index value in the array to snakecase
     * @param {Array} input 
     * @param {Int`} index 
     * @returns Array of values with SnakeCased for specific index.
     */
    getStringArrValSnakeCasedByIndex: (input, index) => {
        if (Array.isArray(input)) {
            if (~index) {
                input[index] = toSnakeCase(input[index]);
            }
        }
        return input;
    }

}