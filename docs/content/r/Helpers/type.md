# `r.type(variable)`
Returns type of the given variable as string.

#### Parameters
`variable` **(object)**: The variable to return type of.

#### Returns
**(string)**: Type of the given variable as string.

#### Since
1.0

#### Examples
```javascript
let num = 2;
let type = r.type(num);
// -> "number"

let string = 'lorem';
let type = r.type(string);
// -> "string"
```