![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 01

### Author: Joseph Wolfe

### Links and Resources
* [repo](https://github.com/charmedsatyr-401-advanced-javascript/lab-01)
* [travis](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-01)

#### Documentation
* [lab assignment](https://github.com/codefellows/seattle-javascript-401d29/blob/master/curriculum/class-01/lab/README.md)

### Modules
* `arithmetic.js`
* `greet.js`
##### Exported Values and Methods from `arithmetic.js`
###### `arithmetic.add(number, number [, ...]) -> number`
* `arithmetic.add(1, 2, 3)` -> `6`
* `arithmetic.add(1, 2, 3, 4)` -> `10`
* `arithmetic.add('a', 2, 3, 4)` -> `null`

###### `arithmetic.subtract(number, number [, ...]) -> number`
* `arithmetic.subtract(4, 1)` -> `3`
* `arithmetic.subtract(4, 1, 2)` -> `1`
* `arithmetic.subtract('a', 1, 2)` -> `null`

###### `arithmetic.multiply(number, number [, ...]) -> number`
* `arithmetic.multiply(4, 2)` -> `8`
* `arithmetic.multiply(4, 2, 2, 1)` -> `16`
* `arithmetic.multiply('a', 2, 2, 1)` -> `null`

###### `arithmetic.divide(number, number) -> number`
* `arithmetic.divide(6, 3)` -> `2`
* `arithmetic.divide(6, 3)` -> `2`
* `arithmetic.divide(6, 3, 4)` -> `2`
* `arithmetic.divide(6, 0)` -> `null`

##### Exported Values and Methods from `greet.js`
###### `greet(string) -> string`
* `greet('world')` -> `'hello, world'`
* `greet('the whole universe')` -> `'hello, the whole universe'`
* `greet(2)` -> `null`

### Setup
#### Running the app
* N/A
  
#### Tests
* How do you run tests?
  
  `npm run test` 
  
  `npm run watch`
* What assertions were made?

`greet`
1. It should return `null` if it receives an `undefined` argument.
2. It should return `null` if it receives a number argument.
3. It should return `null` if it receives a Boolean argument.
4. It should return `null` if it receives an Object argument.
5. It should return `null` if it receives a `null` argument.
6. It should return a string beginning with `'hello '` if it receives a string argument.
7. It should return `'hello world'` if the argument is `'world'`.

`arithmetic.isNum`
1. It should return `true` if it receives an array of numbers.
2. It should return `false` if it receives an array that contains non-numbers.
3. It should return `false` if its argument is not an array.

`arithmetic.add`
1. It should return `null` if its arguments are not all numbers.
2. It should return the sum of its number arguments.

`arithmetic.subtract`
1. It should return `null` if its arguments are not all numbers.
2. It should subtract subseqent arguments from the first argument and return the difference.

`arithmetic.multiply`
1. It should return `null` if its arguments are not all numbers.
2. It should return the product of its arguments.

`arithmetic.divide`
1. It should return `null` if its first two arguments are not numbers.
2. It should return `null` if the second argument is 0.
3. It should return the quotient of its first argument divided by its second argument.
4. It should ignore any more than two arguments.

* What assertions need to be / should be made?

TBD

#### UML
N/A