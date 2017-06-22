# `r.len(object)`
Return length of variable (string or array) as number.

#### Parameters
`object` **(string | array)**: The array to calculate length of.

#### Returns
**(number)**: The length of given object.

#### Since
1.0

#### Examples
```javascript
let array = [0, 5, 78, 'test'];
let length = r.len(array);
// -> 4

let string = 'lorem ipsum';
let length = r.len(string);
// -> 11

let object = { a: 12 };
let length = r.len(object);
// -> undefined
```