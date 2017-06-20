// Add
r.add = (...numbers) => numbers.reduce((result, value) => +result + value, 0);

// Subtract
r.sub = (...numbers) => numbers.reduce((result, value) => +result - value, numbers.splice(0, 1));

// Multiply
r.mul = (...numbers) => numbers.reduce((result, value) => +result * value, numbers.splice(0, 1));

// Divide
r.div = (...numbers) => numbers.reduce((result, value) => +result / value, numbers.splice(0, 1));

// Round
r.round = (number, precision = 0, precomputed = false, mode = 'round') => {
    precision = (!precomputed) ? Math.pow(10, +precision) : precision;
    return Math[mode](+number * precision) / precision;
};

// Round more numbers
r.roundArray = (numbers, precision = 0, mode = 'round') => {
    precision = Math.pow(10, +precision);
    r.loop(numbers, (number, index) => numbers[index] = r.round(number, precision, true, mode));
    return numbers;
};

// Ceil
r.ceil = (number, precision = 0, precomputed = false) => r.round(number, precision, precomputed, 'ceil');

// Ceil more numbers
r.ceilArray = (numbers, precision = 0) => {
    precision = Math.pow(10, +precision);
    r.loop(numbers, (number, index) => numbers[index] = r.round(number, precision, true, 'ceil'));
    return numbers;
};

// Floor
r.floor = (number, precision = 0, precomputed = false) => r.round(number, precision, precomputed, 'floor');

// Floor more numbers
r.floorArray = (numbers, precision = 0) => {
    precision = Math.pow(10, +precision);
    r.loop(numbers, (number, index) => numbers[index] = r.round(number, precision, true, 'floor'));
    return numbers;
};

// Range
r.range = function* (min, max, step = 1) {
    for(let i = min * 1000000; i <= max * 1000000; i += step * 1000000)
        yield i / 1000000;
};

// Range with array
r.rangeArray = (min, max, step = 1) => {
    let result = [];
    for(let number of r.range(min, max, step))
        result.push(number);
    return result;
};

// In range
r.inRange = (number, min, max, step = 1) => {
    let range = r.rangeArray(min, max, step);
    return (r.inArray(number, range));
};

// Clamp
r.clamp = (number, min = 0, max = 1) => {
    if(number > max) return max;
    if(number < min) return min;
    return number;
};

// Average array
r.averageArray = array => {
    let length = r.arrayLen(array), count = 0;
    for(let i = 0; i < length; ++i)
        count += +array[i];
    return count / length;
};

// Average
r.average = (...numbers) => r.averageArray(numbers);

// Min array
r.minArray = array => array.reduce((a, b) => Math.min(a, b));

// Min
r.min = (...numbers) => Math.min(...numbers);

// Max array
r.maxArray = array => array.reduce((a, b) => Math.max(a, b));

// Max
r.max = (...numbers) => Math.max(...numbers);

// Random
r.rand = (min, max, count = 1, precision = 0) => {
    if(count === 1) return r.round(Math.random() * (max - min) + min, precision, false);
    let result = [];
    for(let i = 0; i < count; ++i)
        result.push(r.rand(min, max, 1, precision));
    return result;
};