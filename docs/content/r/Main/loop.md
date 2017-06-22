## `r.loop(array, callback)`
Loops through the given array and executes given callback.

### Parameters
`array` **(array)**: The array to loop through.
`callback` **(function)**: Function executed for each item in array.

### Returns
**(undefined)**: This method does not return any value.

### Since
1.0

### Examples
```javascript
let array = ['string', null];
r.loop(array, (value, key) => console.log(key + ': ' + value));
// -> "0: string"
// -> "1: null"
```