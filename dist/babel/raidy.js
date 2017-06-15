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
r.len = function (string) {
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
    string = r.toString(string);
    return string.charAt(0).toLowerCase() + string.substr(1);
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