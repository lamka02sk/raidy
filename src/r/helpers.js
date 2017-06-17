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