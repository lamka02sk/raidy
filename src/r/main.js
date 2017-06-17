// Length of string or array
r.len = object => (r.type(object) === 'string') ? r.stringLen(object) : r.arrayLen(object);

// For each
r.loop = (array, callback) => {
    array.forEach(callback);
};