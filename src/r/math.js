// Add
r.add = (...numbers) => numbers.reduce((result, value) => +result + value, 0);

// Subtract
r.sub = (...numbers) => numbers.reduce((result, value) => +result - value, numbers.splice(0, 1));

// Multiply
r.mul = (...numbers) => numbers.reduce((result, value) => +result * value, numbers.splice(0, 1));

// Divide
r.div = (...numbers) => numbers.reduce((result, value) => +result / value, numbers.splice(0, 1));

// Ceil
r.ceil = (number, precision = 0, precomputed = false) => {
    precision = (!precomputed) ? Math.pow(10, +precision) : precision;
    return Math.ceil(+number * precision) / precision;
};

// Ceil more numbers
r.ceilArray = (numbers, precision = 0) => {
    precision = Math.pow(10, +precision);
    r.loop(numbers, (number, index) => numbers[index] = r.ceil(number, precision, true));
    return numbers;
};

// Floor
r.floor = (number, precision = 0, precomputed = false) => {
    precision = (!precomputed) ? Math.pow(10, +precision) : precision;
    return Math.floor(+number * precision) / precision;
};

// Floor more numbers
r.floorArray = (numbers, precision = 0) => {
    precision = Math.pow(10, +precision);
    r.loop(numbers, (number, index) => numbers[index] = r.floor(number, precision, true));
    return numbers;
};

// Round

// Round more numbers

// Range

// In range

// Clamp

// Average

// Min

// Max