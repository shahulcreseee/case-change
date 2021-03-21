const toKebabCase = str =>
    str &&
    str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

var isArray = function(a) {
    return Array.isArray(a);
};

var isObject = function(o) {
    return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

var convertKeysToKebabCase = function(o) {
    if (isObject(o)) {
        var n = {};

        Object.keys(o)
            .forEach((k) => {
                n[toKebabCase(k)] = convertKeysToKebabCase(o[k]);
            });

        return n;
    } else if (isArray(o)) {
        return o.map((i) => {
            return convertKeysToKebabCase(i);
        });
    }

    return o;
};

function convertValuesToKebabCase(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string') {
            obj[prop] = toKebabCase(obj[prop]);
        }
        if (typeof obj[prop] === 'object') {
            convertValuesToKebabCase(obj[prop]);
        }
    }
    return obj;
}

function extractKeysToKebabCase(target, keysArr) {
    if (typeof target === 'object') {
        for (const key in target) {
            if (key && isNaN(key)) {
                keysArr.push(toKebabCase(key));
            }
            extractKeysToKebabCase(target[key], keysArr);
        }
    }
    return keysArr;
}

function extractValuesToKebabCase(obj, resultObj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string' && obj[prop].length > 0) {
            resultObj.push(toKebabCase(obj[prop]));
        }
        if (typeof obj[prop] === 'object') {
            extractValuesToKebabCase(obj[prop], resultObj);
        }
        if (!isNaN(obj[prop])) {
            resultObj.push(obj[prop])
        }
    }
    return resultObj;
}

module.exports = {
    /**
     * Check whether the Given string value is KebabCased or not.
     * @param {String} value 
     * @returns Boolean 
     */
    isKebabCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return (value === toKebabCase(value));
        }
        return false;
    },
    /**
     * Converts given value to kebabcase .
     * @param {String} value 
     * @returns KebabCased String value
     */
    getStringKebabCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return toKebabCase(value);
        }
        return value;
    },
    /**
     * Converts specific words in the String to kebab case based on from and to index 
     * @param {String} value 
     * @param {Int} from 
     * @param {Int} to 
     * @returns KebabCased String value for specific indexes.
     */
    getStringKebabCasedWithPos: (value, from, to) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String) && (from != to || from == null)) {
            if (to == null) {
                value = value.replace(value.substring(from, value.length), toKebabCase(value.substring(from, value.length)));
            } else {
                value = value.replace(value.substring(from, to), toKebabCase(value.substring(from, to)));
            }
        }
        return value;
    },
    /**
     * Convert KEYS in the given JSON object to kebabcase
     * @param {JSON} object 
     * @returns JSON Object with All KEYS converted to kebabcase.
     */
    getObjectKeysKebabCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return convertKeysToKebabCase(object);
    },
    /**
     * Convert VALUES in the given JSON object to kebabcase
     * @param {JSON} object 
     * @returns JSON Object with All VALUES converted to kebabcase.
     */
    getObjectvaluesKebabCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return convertValuesToKebabCase(object);
    },
    /**
     * Convert Keys in the object to kebabcase.
     * @param {JSON} object 
     * @returns Array of KebabCased Object Keys.
     */
    getKeysKebabCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractKeysToKebabCase(object, []);
    },
    /**
     * Convert Values in the object to kebabcase.
     * @param {JSON} object 
     * @returns Array of KebabCased Object Values
     */
    getValuesKebabCased(object) {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractValuesToKebabCase(object, []);
    },
    /**
     *  Convert all values in the array to kebabcase
     * @param {Array} input 
     * @returns Array of KebabCased values
     */
    getStringArrayKebabCased: (input) => {
        if (Array.isArray(input)) {
            let values = input.filter(item => item);
            return values.map(value => toKebabCase(value));
        }
        return input;
    },
    /**
     * Convert specific index value in the array to kebabcase
     * @param {Array} input 
     * @param {Int`} index 
     * @returns Array of values with KebabCased for specific index.
     */
    getStringArrValKebabCasedByIndex: (input, index) => {
        if (Array.isArray(input)) {
            if (~index) {
                input[index] = toKebabCase(input[index]);
            }
        }
        return input;
    }
}