// Length of string or array
r.len = object => (r.type(object) === 'string') ? r.stringLen(object) : r.arrayLen(object);