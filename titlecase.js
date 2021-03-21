// const toTitleCase = str =>
//     str
//     .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
//     .map(x => x.charAt(0).toUpperCase() + x.slice(1))
//     .join(' ');

const toTitleCase = (str) =>
    str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );


var isArray = function(a) {
    return Array.isArray(a);
};

var isObject = function(o) {
    return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

var convertKeysToTitleCase = function(o) {
    if (isObject(o)) {
        var n = {};

        Object.keys(o)
            .forEach((k) => {
                n[toTitleCase(k)] = convertKeysToTitleCase(o[k]);
            });

        return n;
    } else if (isArray(o)) {
        return o.map((i) => {
            return convertKeysToTitleCase(i);
        });
    }

    return o;
};

function convertValuesToTitleCase(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string') {
            obj[prop] = toTitleCase(obj[prop]);
        }
        if (typeof obj[prop] === 'object') {
            convertValuesToTitleCase(obj[prop]);
        }
    }
    return obj;
}

function extractKeysToTitleCase(target, keysArr) {
    if (typeof target === 'object') {
        for (const key in target) {
            if (key && isNaN(key)) {
                keysArr.push(toTitleCase(key));
            }
            extractKeysToTitleCase(target[key], keysArr);
        }
    }
    return keysArr;
}

function extractValuesToTitleCase(obj, resultObj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string' && obj[prop].length > 0) {
            resultObj.push(toTitleCase(obj[prop]));
        }
        if (typeof obj[prop] === 'object') {
            extractValuesToTitleCase(obj[prop], resultObj);
        }
        if (!isNaN(obj[prop])) {
            resultObj.push(obj[prop])
        }
    }
    return resultObj;
}

module.exports = {
    /**
     * Check whether the Given string value is TitleCased or not.
     * @param {String} value 
     * @returns Boolean 
     */
    isTitleCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return (value === toTitleCase(value));
        }
        return false;
    },
    /**
     * Converts given value to titlecase .
     * @param {String} value 
     * @returns TitleCased String value
     */
    getStringTitleCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return toTitleCase(value);
        }
        return value;
    },
    /**
     * Converts specific words in the String to title case based on from and to index 
     * @param {String} value 
     * @param {Int} from 
     * @param {Int} to 
     * @returns TitleCased String value for specific indexes.
     */
    getStringTitleCasedWithPos: (value, from, to) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String) && (from != to || from == null)) {
            if (to == null) {
                value = value.replace(value.substring(from, value.length), toTitleCase(value.substring(from, value.length)));
            } else {
                value = value.replace(value.substring(from, to), toTitleCase(value.substring(from, to)));
            }
        }
        return value;
    },
    /**
     * Convert KEYS in the given JSON object to titlecase
     * @param {JSON} object 
     * @returns JSON Object with All KEYS converted to titlecase.
     */
    getObjectKeysTitleCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return convertKeysToTitleCase(object);
    },
    /**
     * Convert VALUES in the given JSON object to titlecase
     * @param {JSON} object 
     * @returns JSON Object with All VALUES converted to titlecase.
     */
    getObjectvaluesTitleCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return convertValuesToTitleCase(object);
    },
    /**
     * Convert Keys in the object to titlecase.
     * @param {JSON} object 
     * @returns Array of TitleCased Object Keys.
     */
    getKeysTitleCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractKeysToTitleCase(object, []);
    },
    /**
     * Convert Values in the object to titlecase.
     * @param {JSON} object 
     * @returns Array of TitleCased Object Values
     */
    getValuesTitleCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractValuesToTitleCase(object, []);
    },
    /**
     *  Convert all values in the array to titlecase
     * @param {Array} input 
     * @returns Array of TitleCased values
     */
    getStringArrayTitleCased: (input) => {
        if (Array.isArray(input)) {
            let values = input.filter(item => item);
            return values.map(value => toTitleCase(value));
        }
        return input;
    },
    /**
     * Convert specific index value in the array to titlecase
     * @param {Array} input 
     * @param {Int`} index 
     * @returns Array of values with TitleCased for specific index.
     */
    getStringArrValTitleCasedByIndex: (input, index) => {
        if (Array.isArray(input)) {
            if (~index) {
                input[index] = toTitleCase(input[index]);
            }
        }
        return input;
    }

}