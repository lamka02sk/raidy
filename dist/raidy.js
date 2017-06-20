// Main Raidy class
class Raidy {

    constructor(selector) {

    }

}

// Main Raidy functions
function R(selector) {
    return new Raidy(selector);
}

let r = {};
// Length of array
r.arrayLen = array => (array.length) ? array.length : undefined;

// Chunk array
r.chunk = (array, size) => {
    let length = r.arrayLen(array);
    let chunks = Math.ceil(length / size);
    let result = [], position = -1, chunk = [];
    for(let i = 0; i < chunks; ++i) {
        for(let j = 0; j < size; ++j) {
            ++position;
            if(position >= length) break;
            chunk.push(array[position]);
        }
        result.push(chunk);
        chunk = [];
    }
    return result;
};

// Merge arrays
r.merge = (...arrays) => {
    let length = r.arrayLen(arrays);
    for(let i = 1; i < length; ++i) {
        let arrayLength = r.arrayLen(arrays[i]);
        for(let j = 0; j < arrayLength; ++j)
            arrays[0].push(arrays[i][j]);
    }
    return arrays[0];
};

// Check for item in array
r.inArray = (needle, array) => (array.indexOf(needle) !== -1);

// Show array differences
r.diff = (primary, secondary) => {
    if(r.arrayLen(primary) > r.arrayLen(secondary)) return false;
    let diff = [];
    r.loop(primary, (value, key) => {
        if(value !== secondary[key]) diff.push(key);
    });
    return diff;
};

// Drop x last items
r.drop = (array, number) => array.splice(0, r.arrayLen(array) - number);

// Fill array
r.fill = (array, value = '', from = 0, to = r.arrayLen(array)) => {
    for(let i = from; i < to; ++i) {
        if(r.arrayLen(array) < i) array.push(value);
        else array[i] = value;
    }
    return array;
};

// Return first item
r.first = array => array[0];

// Pair arrays to object
r.pair = array => {
    let result = {};
    r.loop(array, item => {
        if(r.arrayLen(item) < 2) return false;
        result[item[0]] = item[1];
    });
    return result;
};

// Index of item
r.index = (array, needle, start = 0, end = r.arrayLen(array)) => {
    if(end > r.arrayLen(array)) end = r.arrayLen(array);
    return array.slice(start, end).indexOf(needle);
};

// Intersection
r.intersect = (primary, secondary) => {
    if(r.arrayLen(primary) > r.arrayLen(secondary)) return false;
    let result = [];
    r.loop(primary, item => {
        if(r.inArray(item, secondary)) result.push(item);
    });
    return result;
};

// Join
r.join = (array, delimiter, start = 0, end = r.arrayLen(array)) => array.slice(start, end + 1).join(delimiter);

// Return last item
r.last = array => array.pop();

// Last index of value
r.lastIndex = (array, needle, start = 0, end = r.arrayLen(array)) => {
    if(end > r.arrayLen(array)) end = r.arrayLen(array);
    return array.slice(start, end).lastIndexOf(needle);
};

// Pull
r.pull = (array, items) => {
    let length = r.arrayLen(array);
    for(let i = 0; i < length; ++i) {
        if(r.inArray(array[i], items)) {
            array.splice(i, 1);
            --i;
        }
    }
    return array;
};

// Pull at
r.pullAt = (array, positions) => {
    r.loop(positions, item => {
        array.splice(item, 1);
        r.loop(positions, (pos, key) => {
            if(pos > item) --positions[key];
        });
    });
    return array;
};

// Pop item
r.pop = (array, position) => {
    array.splice(position, 1);
    return array;
};

// Push item
r.push = (array, item, position = r.arrayLen(array)) => {
    array.splice(position, 0, item);
    return array;
};

// Reverse array
r.reverseArray = (array, from = 0) => [].concat(array.slice(0, from), array.slice(from).reverse());

// Slice
r.slice = (array, start, end = r.arrayLen(array)) => array.slice(start, end);

// Unique array
r.unique = array => {
    let result = [];
    r.loop(array, item => {
        if(!r.inArray(item, result)) result.push(item);
    });
    return result;
};

// Union arrays
r.union = (primary, secondary) => r.unique(r.merge(primary, secondary));

// Zip array
r.zip = (...arrays) => {
    let zipped = [];
    let length = r.arrayLen(arrays[0]);
    for(let i = 0; i < length; ++i) {
        zipped.push([]);
        r.loop(arrays, array => {
            if(array[i] !== undefined) zipped[i].push(array[i]);
        });
    }
    return zipped;
};

// Unzip array
r.unzip = array => {
    let unzipped = [];
    let length = r.arrayLen(array[0]);
    for(let i = 0; i < length; ++i) {
        unzipped.push([]);
        r.loop(array, item => {
            if(item[i] !== undefined) unzipped[i].push(item[i]);
        });
    }
    return unzipped;
};
// Get type of the variable [any type]
r.type = variable => typeof variable;

// Check boolean
r.isBool = variable => (r.type(variable) === 'boolean');

// Check number
r.isNum = variable => (r.type(variable) === 'number');

// Check string
r.isString = variable => (r.type(variable) === 'string');

// Check array
r.isArray = variable => (variable instanceof Array);

// Check array buffer
r.isArrayBuffer = variable => (variable instanceof ArrayBuffer);

// Check object
r.isObject = variable => (r.type(variable) === 'object');

// Check buffer
r.isBuffer = variable => (variable instanceof Buffer);

// Check date
r.isDate = variable => (variable instanceof Date);

// Check DOM element
r.isElement = variable => (r.isObject(variable) && variable.nodeType === 1);

// Check error
r.isError = variable => (variable instanceof Error);

// Check function
r.isFunction = variable => (r.type(variable) === 'function');

// Check null
r.isNull = variable => (variable === null);

// Check undefined
r.isUndefined = variable => (variable === undefined);

// Eval
r.e = content => eval(content);

// Noop
r._ = () => {};
// Length of string or array
r.len = object => (r.type(object) === 'string') ? r.stringLen(object) : r.arrayLen(object);

// For each
r.loop = (array, callback) => {
    array.forEach(callback);
};
// Add
r.add = (...numbers) => numbers.reduce((result, value) => +result + value, 0);

// Subtract
r.sub = (...numbers) => numbers.reduce((result, value) => +result - value, numbers.splice(0, 1));

// Multiply
r.mul = (...numbers) => numbers.reduce((result, value) => +result * value, numbers.splice(0, 1));

// Divide
r.div = (...numbers) => numbers.reduce((result, value) => +result / value, numbers.splice(0, 1));

// Round
r.round = (number, precision = 0, precomputed = false, mode = 'round') => {
    precision = (!precomputed) ? Math.pow(10, +precision) : precision;
    return Math[mode](+number * precision) / precision;
};

// Round more numbers
r.roundArray = (numbers, precision = 0, mode = 'round') => {
    precision = Math.pow(10, +precision);
    r.loop(numbers, (number, index) => numbers[index] = r.round(number, precision, true, mode));
    return numbers;
};

// Ceil
r.ceil = (number, precision = 0, precomputed = false) => r.round(number, precision, precomputed, 'ceil');

// Ceil more numbers
r.ceilArray = (numbers, precision = 0) => {
    precision = Math.pow(10, +precision);
    r.loop(numbers, (number, index) => numbers[index] = r.round(number, precision, true, 'ceil'));
    return numbers;
};

// Floor
r.floor = (number, precision = 0, precomputed = false) => r.round(number, precision, precomputed, 'floor');

// Floor more numbers
r.floorArray = (numbers, precision = 0) => {
    precision = Math.pow(10, +precision);
    r.loop(numbers, (number, index) => numbers[index] = r.round(number, precision, true, 'floor'));
    return numbers;
};

// Range
r.range = function* (min, max, step = 1) {
    for(let i = min * 1000000; i <= max * 1000000; i += step * 1000000)
        yield i / 1000000;
};

// Range with array
r.rangeArray = (min, max, step = 1) => {
    let result = [];
    for(let number of r.range(min, max, step))
        result.push(number);
    return result;
};

// In range
r.inRange = (number, min, max, step = 1) => {
    let range = r.rangeArray(min, max, step);
    return (r.inArray(number, range));
};

// Clamp
r.clamp = (number, min = 0, max = 1) => {
    if(number > max) return max;
    if(number < min) return min;
    return number;
};

// Average array
r.averageArray = array => {
    let length = r.arrayLen(array), count = 0;
    for(let i = 0; i < length; ++i)
        count += +array[i];
    return count / length;
};

// Average
r.average = (...numbers) => r.averageArray(numbers);

// Min array
r.minArray = array => array.reduce((a, b) => Math.min(a, b));

// Min
r.min = (...numbers) => Math.min(...numbers);

// Max array
r.maxArray = array => array.reduce((a, b) => Math.max(a, b));

// Max
r.max = (...numbers) => Math.max(...numbers);

// Random
r.rand = (min, max, count = 1, precision = 0) => {
    if(count === 1) return r.round(Math.random() * (max - min) + min, precision, false);
    let result = [];
    for(let i = 0; i < count; ++i)
        result.push(r.rand(min, max, 1, precision));
    return result;
};
const REGEX_PUNCTUATION = /[^_\W]+/g;
const REGEX_PUNCTUATION_END = /[_\W]+$/i;
const REGEX_TITLE_CASE = /\w\S*/g;
const REGEX_CAMEL_CASE = /(?:^\w|[A-Z]|\b\w)/g;
const REGEX_SPACE = /\s+/g;
const REGEX_ENTITY = /[&<>"'\/]/g;
const ENTITY_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
};

// Convert object to string
r.toString = object => '' + object;

// Length of string
r.stringLen = string => r.toString(string).length;

// Lowercase given string
r.lowCase = string => r.toString(string).toLowerCase();

// Uppercase given string
r.upCase = string => r.toString(string).toUpperCase();

// Title Case string
r.titleCase = string => r.toString(string).replace(
    REGEX_TITLE_CASE,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
);

// camelCase string
r.camelCase = string => r.toString(string).replace(
    REGEX_CAMEL_CASE,
    (letter, index) => index === 0 ? letter.toLowerCase() : letter.toUpperCase()
).replace(REGEX_SPACE, '');

// kebab-case string
r.kebabCase = string => r.lowCase(string).split(' ').join('-');

// lOW FIRST string
r.lowFirst = string => r.toString(string).charAt(0).toLowerCase() + r.toString(string).substr(1);

// snake_case string
r.snakeCase = string => r.lowCase(string).split(' ').join('_');

// Check if string starts with character
r.startsWith = (string, character, start = 0) => {
    string = r.toString(string);
    character = r.toString(character);
    let length = string.length;
    start = (start === null || start < 0 || start >= length) ? 0 : +start;
    return string[start] === character;
};

// Check if string ends with character
r.endsWith = (string, character, end = 0) => {
    string = r.toString(string);
    character = r.toString(character);
    let length = string.length;
    end = (end === null || end < 0 || end >= length) ? length : +end;
    return string[end] === character;
};

// Repeat string
r.repeat = (string, number = 2, delimiter = '') => {
    string = r.toString(string);
    let result = string;
    for(let i = 1; i < number; ++i)
        result += delimiter + string;
    return result;
};

// Split string
r.split = (string, delimiter = '', length = -1) => {
    string = r.toString(string).split(delimiter);
    if(length < -1 || length > string.length || length === -1)
        return string.slice(0);
    return string.slice(0, length);
};

// Replace part of string
r.replace = (string, pattern = '', replace = '') => r.toString(string).replace(pattern, replace);

// Truncate string
r.truncate = (string, length = 21, end = '') => r.toString(string).substr(0, length).replace(REGEX_PUNCTUATION_END, '') + end;

// Split string to words
r.words = string => r.toString(string).match(REGEX_PUNCTUATION);

// Count words in string
r.wordsCount = string => r.words(string).length;

// Escape string
r.escape = string => r.toString(string).replace(
    REGEX_ENTITY,
    entity => ENTITY_MAP[entity]
);

// Reverse string
r.reverse = string => r.toString(string).split('').reverse().join('');

// Shuffle string
r.shuffle = string => {
    let a = r.toString(string).split(''),
        n = a.length - 1;
    for(let i = n; i > 0; --i) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
};