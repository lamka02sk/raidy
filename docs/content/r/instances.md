# `r` object
`r` is object, collection of methods, containing all methods independent on `R()` instances.

Methods included in `r` are separated into few modules:
- main
- helpers
- math
- text
- array

***Main*** module contains methods based methods from other categories and basic stuff.

***Helpers*** module is helping you with basic stuff like checking variable type and time handling.

***Math*** is module full of basic mathematical methods and simplifies use of JavaScripts' built in Math library.

***Text*** handles most used string operations.

***Array*** module is speed up array manipulation and processing of array like structures.

## List of `r` methods

### Main module
- `r.len(object)`
- `r.loop(array, callback)`

### Helpers module
- `r.type(variable)`
- `r.isBool(variable)`
- `r.isNum(variable)`
- `r.isString(variable)`
- `r.isArray(variable)`
- `r.isArrayBuffer(variable)`
- `r.isObject(variable)`
- `r.isBuffer(variable)`
- `r.isDate(variable)`
- `r.isElement(variable)`
- `r.isError(variable)`
- `r.isFunction(variable)`
- `r.isNull(variable)`
- `r.isUndefined(variable)`
- `r.e(content)`
- `r.delay(callback, delay, ...parameters)`
- `r.timer(callback, time, count = -1, ...parameters)`
- `r._()`

### Math module
- `r.add(...numbers)`
- `r.sub(...numbers)`
- `r.mul(...numbers)`
- `r.div(...numbers)`
- `r.round(number, precision = 0, precomputed = false, mode = 'round')`
- `r.roundArray(numbers, precision = 0, mode = 'round')`
- `r.ceil(number, precision = 0, precomputed = false)`
- `r.ceilArray(numbers, precision = 0)`
- `r.floor(number, precision = 0, precomputed = false)`
- `r.floorArray(numbers, precision = 0)`
- `r.range(min, max, step = 1)`
- `r.rangeArray(min, max, step = 1)`
- `r.inRange(number, min, max, step = 1)`
- `r.clamp(number, min = 0, max = 1)`
- `r.averageArray(array)`
- `r.average(...numbers)`
- `r.minArray(array)`
- `r.min(...numbers)`
- `r.maxArray(array)`
- `r.max(...numbers)`
- `r.rand(min, max, count = 1, precision = 0)`

### Text module
- `r.toString(object)`
- `r.stringLen(string)`
- `r.lowCase(string)`
- `r.upCase(string)`
- `r.titleCase(string)`
- `r.camelCase(string)`
- `r.kebabCase(string)`
- `r.lowFirst(string)`
- `r.snakeCase(string)`
- `r.startsWith(string, character, start = 0)`
- `r.endsWith(string, character, end = 0)`
- `r.repeat(string, number = 2, delimiter = '')`
- `r.split(string, delimiter = '', length = -1)`
- `r.replace(string, pattern = '', replace = '')`
- `r.truncate(string, length = 21, end = '')`
- `r.words(string)`
- `r.wordsCount(string)`
- `r.escape(string)`
- `r.reverse(string)`
- `r.shuffle(string)`

### Array module
- `r.arrayLen(array)`
- `r.chunk(array, size)`
- `r.merge(...arrays)`
- `r.inArray(needle, array)`
- `r.diff(primary, secondary)`
- `r.drop(array, number)`
- `r.fill(array, value = '', from = 0, to = r.arrayLen(array))`
- `r.first(array)`
- `r.pair(array)`
- `r.index(array, needle, start = 0, end = r.arrayLen(array))`
- `r.intersect(primary, secondary)`
- `r.join(array, delimiter, start = 0, end = r.arrayLen(array))`
- `r.last(array)`
- `r.lastIndex(array, needle, start = 0, end = r.arrayLen(array))`
- `r.pull(array, items)`
- `r.pullAt(array, positions)`
- `r.pop(array, position)`
- `r.push(array, item, position = r.arrayLen(array))`
- `r.reverseArray(array, from = 0)`
- `r.slice(array, start, end = r.arrayLen(array))`
- `r.unique(array)`
- `r.union(primary, secondary)`
- `r.zip(...arrays)`
- `r.unzip(array)`