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