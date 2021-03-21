const toCamelCase = str => {
    let s =
        str &&
        str
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
        .join('');
    return s.slice(0, 1).toLowerCase() + s.slice(1);
};

var isArray = function(a) {
    return Array.isArray(a);
};

var isObject = function(o) {
    return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

var convertKeysToCamelCase = function(o) {
    if (isObject(o)) {
        var n = {};

        Object.keys(o)
            .forEach((k) => {
                n[toCamelCase(k)] = convertKeysToCamelCase(o[k]);
            });

        return n;
    } else if (isArray(o)) {
        return o.map((i) => {
            return convertKeysToCamelCase(i);
        });
    }

    return o;
};

function convertValuesToCamelCase(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string') {
            obj[prop] = toCamelCase(obj[prop]);
        }
        if (typeof obj[prop] === 'object') {
            convertValuesToCamelCase(obj[prop]);
        }
    }
    return obj;
}

function extractKeysToCamelCase(target, keysArr) {
    if (typeof target === 'object') {
        for (const key in target) {
            if (key && isNaN(key)) {
                keysArr.push(toCamelCase(key));
            }
            extractKeysToCamelCase(target[key], keysArr);
        }
    }
    return keysArr;
}

function extractValuesToCamelCase(obj, resultObj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string' && obj[prop].length > 0) {
            resultObj.push(toCamelCase(obj[prop]));
        }
        if (typeof obj[prop] === 'object') {
            extractValuesToCamelCase(obj[prop], resultObj);
        }
        if (!isNaN(obj[prop])) {
            resultObj.push(obj[prop])
        }
    }
    return resultObj;
}

module.exports = {
    /**
     * Check whether the Given string value is CamelCased or not.
     * @param {String} value 
     * @returns Boolean 
     */
    isCamelCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return (value === toCamelCase(value));
        }
        return false;
    },
    /**
     * Converts given value to CamelCase .
     * @param {String} value 
     * @returns CamelCased String value
     */
    getStringCamelCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return toCamelCase(value);
        }
        return value;
    },
    /**
     * Converts specific words in the String to camel case based on from and to index 
     * @param {String} value 
     * @param {Int} from 
     * @param {Int} to 
     * @returns CamelCased String value for specific indexes.
     */
    getStringCamelCasedWithPos: (value, from, to) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String) && (from != to || from == null)) {
            if (to == null) {
                value = value.replace(value.substring(from, value.length), toCamelCase(value.substring(from, value.length)));
            } else {
                value = value.replace(value.substring(from, to), toCamelCase(value.substring(from, to)));
            }
        }
        return value;
    },
    /**
     * Convert KEYS in the given JSON object to camelcase
     * @param {JSON} object 
     * @returns JSON Object with All KEYS converted to camelcase.
     */
    getObjectKeysCamelCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return convertKeysToCamelCase(object);
    },
    /**
     * Convert VALUES in the given JSON object to camelcase
     * @param {JSON} object 
     * @returns JSON Object with All VALUES converted to camelcase.
     */
    getObjectvaluesCamelCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return convertValuesToCamelCase(object);
    },
    /**
     * Convert Keys in the object to camelcase.
     * @param {JSON} object 
     * @returns Array of CamelCased Object Keys.
     */
    getKeysCamelCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractKeysToCamelCase(object, []);
    },
    /**
     * Convert Values in the object to camelcase.
     * @param {JSON} object 
     * @returns Array of CamelCased Object Values
     */
    getValuesCamelCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractValuesToCamelCase(object, []);
    },
    /**
     *  Convert all values in the array to camelcase
     * @param {Array} input 
     * @returns Array of CamelCased values
     */
    getStringArrayCamelCased: (input) => {
        if (Array.isArray(input)) {
            let values = input.filter(item => item);
            return values.map(value => toCamelCase(value));
        }
        return input;
    },
    /**
     * Convert specific index value in the array to camelcase
     * @param {Array} input 
     * @param {Int`} index 
     * @returns Array of values with CamelCased for specific index.
     */
    getStringArrValCamelCasedByIndex: (input, index) => {
        if (Array.isArray(input)) {
            if (~index) {
                input[index] = toCamelCase(input[index]);
            }
        }
        return input;
    }

}