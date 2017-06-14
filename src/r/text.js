// Convert object to string
r.toString = function(object) {
    return '' + object;
};

// Length of string
r.len = function(string) {
    return r.toString(string).length;
};

// Lowercase given string
r.lowCase = function(string) {
    return r.toString(string).toLowerCase();
};

// Uppercase given string
r.upCase = function(string) {
    return r.toString(string).toUpperCase();
};

// Title Case string
r.titleCase = function(string) {
    return r.toString(string).replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

// camelCase string
r.camelCase = function(string) {
    return r.toString(string).replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};

// kebab-case string
r.kebabCase = function(string) {
      return r.lowCase(string).split(' ').join('-');
};

// lOW FIRST string
r.lowFirst = function(string) {
    string = r.toString(string);
    return string.charAt(0).toLowerCase() + string.substr(1);
};

// snake_case string
r.snakeCase = function(string) {
    return r.lowCase(string).split(' ').join('_');
};

// Check if string ends with character
r.endsWith = function(string, character, end) {
    string = r.toString(string);
    character = r.toString(character);
    let length = string.length;
    end = (end === undefined || end === null || end < 0 || end >= length) ? length : +end;
    return string[end] === character;
};

// Escape string
const ENTITY_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
};

r.escape = function(string) {
    return r.toString(string).replace(/[&<>"'\/]/g, function(entity) {
        return ENTITY_MAP[entity];
    });
};

// Reverse string
r.reverse = function(string) {
    return string.split('').reverse().join('');
};

// Shuffle string
r.shuffle = function(string) {
    let a = string.split(''),
        n = a.length - 1;
    for(let i = n; i > 0; --i) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
};