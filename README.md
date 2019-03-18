![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 01

### Author: Joseph Wolfe

### Links and Resources
* [repo](https://github.com/charmedsatyr-401-advanced-javascript/lab-01)
* [travis](http://xyz.com)

#### Documentation
* [lab assignment](https://github.com/codefellows/seattle-javascript-401d29/blob/master/curriculum/class-01/lab/README.md)

### Modules
#### `arithmetic.js`
##### Exported Values and Methods

###### `arithmetic.add(number, number) -> number`
`arithmetic.add(1, 2)` -> `3`

###### `arithmetic.subtract(number, number) -> number`
`arithmetic.add(4, 1)` -> `3`

###### `arithmetic.multiply(number, number) -> number`
`arithmetic.add(4, 2)` -> `8`

###### `arithmetic.divide(number, number) -> number`
`arithmetic.add(6, 3)` -> `2`

#### `greet.js`
##### Exported Values and Methods

###### `greet(string) -> string`
`greet('world')` -> `'hello, world'`

### Setup
#### Running the app
* `npm start`
  
#### Tests
* How do you run tests?
  
  `npm run test` 
  
  `npm run watch`
* What assertions were made?

`greet`
1. It should return `null` if it receives an undefined argument.
2. It should return `null` if it receives a number argument.
3. It should return `null` if it receives a Boolean argument.
4. It should return `null` if it receives an Object argument.
5. It should return `null` if it receives a Null argument.
6. It should return `hello world` if the argument is `world`.

`arithmetic.add`
1. It should return `null` if it does not receive two numbers for arguments.
2. It should returns the sum of its two number arguments.
3. It should ignore any more than two arguments.

`arithmetic.subtract`
1. It should return `null` if it does not receive two numbers for arguments.
 2. It should return the difference of its two arguments.
 3. It should ignore any more than two arguments.

`arithmetic.multiply`
 1. It should return `null` if it does not receive two numbers for arguments.
 2. It should return the product of its two arguments.
 3. It should ignore any more than two arguments.

`arithmetic.divide`
 1. It should return `null` if it does not receive two numbers for arguments.
 2. It should return `null` if the second argument is 0.
 3. It should return the quotient of its two arguments.
 4. It should ignore any more than two arguments.

* What assertions need to be / should be made?

TBD

#### UML
N/A
