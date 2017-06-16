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
            if(position >= length)
                break;
            chunk.push(array[position]);
            chunk = [];
        }
        result.push(chunk);
    }
    return result;
};