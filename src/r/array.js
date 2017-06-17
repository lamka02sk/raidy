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