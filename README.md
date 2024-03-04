
# isDataValid

## Overview

`isDataValid` is a lightweight JavaScript library for data validation. It provides simple functions to validate strings, numbers, emails, and dates.

## Installation

You can install `isdatavalid` via npm:

```bash
npm install isdatavalid
```
## Usage

```javascript
const isDataValid = require('isdatavalid');

console.log(isDataValid.isString('Hello')); // true
console.log(isDataValid.isNumber(123)); // true
console.log(isDataValid.isEmail('example@email.com')); // true
console.log(isDataValid.isDate('2024-03-04')); // true
```

## API

### `isString(value)`

- `value`: The value to be validated.

Returns `true` if the value is a string, `false` otherwise.

### `isNumber(value)`

- `value`: The value to be validated.

Returns `true` if the value is a number, `false` otherwise.

### `isEmail(value)`

- `value`: The value to be validated.

Returns `true` if the value is a valid email address, `false` otherwise.

### `isDate(value)`

- `value`: The value to be validated.

Returns `true` if the value is a valid date string, `false` otherwise.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

