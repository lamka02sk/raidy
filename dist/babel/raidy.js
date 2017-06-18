var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Main Raidy class
var Raidy = function Raidy(selector) {
    _classCallCheck(this, Raidy);
};

// Main Raidy functions


function R(selector) {
    return new Raidy(selector);
}

var r = {};
// Length of array
r.arrayLen = function (array) {
    return array.length ? array.length : undefined;
};

// Chunk array
r.chunk = function (array, size) {
    var length = r.arrayLen(array);
    var chunks = Math.ceil(length / size);
    var result = [],
        position = -1,
        chunk = [];
    for (var i = 0; i < chunks; ++i) {
        for (var j = 0; j < size; ++j) {
            ++position;
            if (position >= length) break;
            chunk.push(array[position]);
        }
        result.push(chunk);
        chunk = [];
    }
    return result;
};

// Merge arrays
r.merge = function () {
    for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
        arrays[_key] = arguments[_key];
    }

    var length = r.arrayLen(arrays);
    for (var i = 1; i < length; ++i) {
        var arrayLength = r.arrayLen(arrays[i]);
        for (var j = 0; j < arrayLength; ++j) {
            arrays[0].push(arrays[i][j]);
        }
    }
    return arrays[0];
};

// Check for item in array
r.inArray = function (needle, array) {
    return array.indexOf(needle) !== -1;
};

// Show array differences
r.diff = function (primary, secondary) {
    if (r.arrayLen(primary) > r.arrayLen(secondary)) return false;
    var diff = [];
    r.loop(primary, function (value, key) {
        if (value !== secondary[key]) diff.push(key);
    });
    return diff;
};

// Drop x last items
r.drop = function (array, number) {
    return array.splice(0, r.arrayLen(array) - number);
};

// Fill array
r.fill = function (array) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var to = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : r.arrayLen(array);

    for (var i = from; i < to; ++i) {
        if (r.arrayLen(array) < i) array.push(value);else array[i] = value;
    }
    return array;
};

// Return first item
r.first = function (array) {
    return array[0];
};

// Pair arrays to object
r.pair = function (array) {
    var result = {};
    r.loop(array, function (item) {
        if (r.arrayLen(item) < 2) return false;
        result[item[0]] = item[1];
    });
    return result;
};

// Index of item
r.index = function (array, needle) {
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : r.arrayLen(array);

    if (end > r.arrayLen(array)) end = r.arrayLen(array);
    return array.slice(start, end).indexOf(needle);
};

// Intersection
r.intersect = function (primary, secondary) {
    if (r.arrayLen(primary) > r.arrayLen(secondary)) return false;
    var result = [];
    r.loop(primary, function (item) {
        if (r.inArray(item, secondary)) result.push(item);
    });
    return result;
};

// Join
r.join = function (array, delimiter) {
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : r.arrayLen(array);
    return array.slice(start, end + 1).join(delimiter);
};

// Return last item
r.last = function (array) {
    return array.pop();
};

// Last index of value
r.lastIndex = function (array, needle) {
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : r.arrayLen(array);

    if (end > r.arrayLen(array)) end = r.arrayLen(array);
    return array.slice(start, end).lastIndexOf(needle);
};

// Pull
r.pull = function (array, items) {
    var length = r.arrayLen(array);
    for (var i = 0; i < length; ++i) {
        if (r.inArray(array[i], items)) {
            array.splice(i, 1);
            --i;
        }
    }
    return array;
};

// Pull at
r.pullAt = function (array, positions) {
    r.loop(positions, function (item) {
        array.splice(item, 1);
        r.loop(positions, function (pos, key) {
            if (pos > item) --positions[key];
        });
    });
    return array;
};

// Pop item
r.pop = function (array, position) {
    array.splice(position, 1);
    return array;
};

// Push item
r.push = function (array, item) {
    var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : r.arrayLen(array);

    array.splice(position, 0, item);
    return array;
};

// Reverse array
r.reverseArray = function (array) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return [].concat(array.slice(0, from), array.slice(from).reverse());
};

// Slice
r.slice = function (array, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : r.arrayLen(array);
    return array.slice(start, end);
};

// Unique array
r.unique = function (array) {
    var result = [];
    r.loop(array, function (item) {
        if (!r.inArray(item, result)) result.push(item);
    });
    return result;
};

// Union arrays
r.union = function (primary, secondary) {
    return r.unique(r.merge(primary, secondary));
};

// Zip array
r.zip = function () {
    for (var _len2 = arguments.length, arrays = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        arrays[_key2] = arguments[_key2];
    }

    var zipped = [];
    var length = r.arrayLen(arrays[0]);

    var _loop = function _loop(i) {
        zipped.push([]);
        r.loop(arrays, function (array) {
            if (array[i] !== undefined) zipped[i].push(array[i]);
        });
    };

    for (var i = 0; i < length; ++i) {
        _loop(i);
    }
    return zipped;
};

// Unzip array
r.unzip = function (array) {
    var unzipped = [];
    var length = r.arrayLen(array[0]);

    var _loop2 = function _loop2(i) {
        unzipped.push([]);
        r.loop(array, function (item) {
            if (item[i] !== undefined) unzipped[i].push(item[i]);
        });
    };

    for (var i = 0; i < length; ++i) {
        _loop2(i);
    }
    return unzipped;
};
// Get type of the variable [any type]
r.type = function (variable) {
    return typeof variable === 'undefined' ? 'undefined' : _typeof(variable);
};

// Check boolean
r.isBool = function (variable) {
    return r.type(variable) === 'boolean';
};

// Check number
r.isNum = function (variable) {
    return r.type(variable) === 'number';
};

// Check string
r.isString = function (variable) {
    return r.type(variable) === 'string';
};

// Check array
r.isArray = function (variable) {
    return variable instanceof Array;
};

// Check array buffer
r.isArrayBuffer = function (variable) {
    return variable instanceof ArrayBuffer;
};

// Check object
r.isObject = function (variable) {
    return r.type(variable) === 'object';
};

// Check buffer
r.isBuffer = function (variable) {
    return variable instanceof Buffer;
};

// Check date
r.isDate = function (variable) {
    return variable instanceof Date;
};

// Check DOM element
r.isElement = function (variable) {
    return r.isObject(variable) && variable.nodeType === 1;
};

// Check error
r.isError = function (variable) {
    return variable instanceof Error;
};

// Check function
r.isFunction = function (variable) {
    return r.type(variable) === 'function';
};

// Check null
r.isNull = function (variable) {
    return variable === null;
};

// Check undefined
r.isUndefined = function (variable) {
    return variable === undefined;
};

// Eval
r.e = function (content) {
    return eval(content);
};

// Noop
r._ = function () {};
// Length of string or array
r.len = function (object) {
    return r.type(object) === 'string' ? r.stringLen(object) : r.arrayLen(object);
};

// For each
r.loop = function (array, callback) {
    array.forEach(callback);
};
// Add
r.add = function () {
    for (var _len3 = arguments.length, numbers = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        numbers[_key3] = arguments[_key3];
    }

    return numbers.reduce(function (result, value) {
        return +result + value;
    }, 0);
};

// Subtract
r.sub = function () {
    for (var _len4 = arguments.length, numbers = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        numbers[_key4] = arguments[_key4];
    }

    return numbers.reduce(function (result, value) {
        return +result - value;
    }, numbers.splice(0, 1));
};

// Multiply
r.mul = function () {
    for (var _len5 = arguments.length, numbers = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        numbers[_key5] = arguments[_key5];
    }

    return numbers.reduce(function (result, value) {
        return +result * value;
    }, numbers.splice(0, 1));
};

// Divide
r.div = function () {
    for (var _len6 = arguments.length, numbers = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        numbers[_key6] = arguments[_key6];
    }

    return numbers.reduce(function (result, value) {
        return +result / value;
    }, numbers.splice(0, 1));
};

// Ceil
r.ceil = function (number) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var precomputed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    precision = !precomputed ? Math.pow(10, +precision) : precision;
    return Math.ceil(+number * precision) / precision;
};

// Ceil more numbers
r.ceilArray = function (numbers) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    precision = Math.pow(10, +precision);
    r.loop(numbers, function (number, index) {
        return numbers[index] = r.ceil(number, precision, true);
    });
    return numbers;
};

// Floor
r.floor = function (number) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var precomputed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    precision = !precomputed ? Math.pow(10, +precision) : precision;
    return Math.floor(+number * precision) / precision;
};

// Floor more numbers
r.floorArray = function (numbers) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    precision = Math.pow(10, +precision);
    r.loop(numbers, function (number, index) {
        return numbers[index] = r.floor(number, precision, true);
    });
    return numbers;
};

// Round

// Round more numbers

// Range

// In range

// Clamp

// Average

// Min

// Max
var REGEX_PUNCTUATION = /[^_\W]+/g;
var REGEX_PUNCTUATION_END = /[_\W]+$/i;
var REGEX_TITLE_CASE = /\w\S*/g;
var REGEX_CAMEL_CASE = /(?:^\w|[A-Z]|\b\w)/g;
var REGEX_SPACE = /\s+/g;
var REGEX_ENTITY = /[&<>"'\/]/g;
var ENTITY_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
};

// Convert object to string
r.toString = function (object) {
    return '' + object;
};

// Length of string
r.stringLen = function (string) {
    return r.toString(string).length;
};

// Lowercase given string
r.lowCase = function (string) {
    return r.toString(string).toLowerCase();
};

// Uppercase given string
r.upCase = function (string) {
    return r.toString(string).toUpperCase();
};

// Title Case string
r.titleCase = function (string) {
    return r.toString(string).replace(REGEX_TITLE_CASE, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

// camelCase string
r.camelCase = function (string) {
    return r.toString(string).replace(REGEX_CAMEL_CASE, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(REGEX_SPACE, '');
};

// kebab-case string
r.kebabCase = function (string) {
    return r.lowCase(string).split(' ').join('-');
};

// lOW FIRST string
r.lowFirst = function (string) {
    return r.toString(string).charAt(0).toLowerCase() + r.toString(string).substr(1);
};

// snake_case string
r.snakeCase = function (string) {
    return r.lowCase(string).split(' ').join('_');
};

// Check if string starts with character
r.startsWith = function (string, character) {
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    string = r.toString(string);
    character = r.toString(character);
    var length = string.length;
    start = start === null || start < 0 || start >= length ? 0 : +start;
    return string[start] === character;
};

// Check if string ends with character
r.endsWith = function (string, character) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    string = r.toString(string);
    character = r.toString(character);
    var length = string.length;
    end = end === null || end < 0 || end >= length ? length : +end;
    return string[end] === character;
};

// Repeat string
r.repeat = function (string) {
    var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    string = r.toString(string);
    var result = string;
    for (var i = 1; i < number; ++i) {
        result += delimiter + string;
    }return result;
};

// Split string
r.split = function (string) {
    var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    string = r.toString(string).split(delimiter);
    if (length < -1 || length > string.length || length === -1) return string.slice(0);
    return string.slice(0, length);
};

// Replace part of string
r.replace = function (string) {
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return r.toString(string).replace(pattern, replace);
};

// Truncate string
r.truncate = function (string) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 21;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return r.toString(string).substr(0, length).replace(REGEX_PUNCTUATION_END, '') + end;
};

// Split string to words
r.words = function (string) {
    return r.toString(string).match(REGEX_PUNCTUATION);
};

// Count words in string
r.wordsCount = function (string) {
    return r.words(string).length;
};

// Escape string
r.escape = function (string) {
    return r.toString(string).replace(REGEX_ENTITY, function (entity) {
        return ENTITY_MAP[entity];
    });
};

// Reverse string
r.reverse = function (string) {
    return r.toString(string).split('').reverse().join('');
};

// Shuffle string
r.shuffle = function (string) {
    var a = r.toString(string).split(''),
        n = a.length - 1;
    for (var i = n; i > 0; --i) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
};