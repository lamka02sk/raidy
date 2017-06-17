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