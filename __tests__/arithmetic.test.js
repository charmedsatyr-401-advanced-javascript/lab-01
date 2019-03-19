'use strict';

const arithmetic = require('../lib/arithmetic.js');
const { number, word } = require('faker').random;

let a, b, c, w;
let nums, mixed;

beforeEach(() => {
  a = number();
  b = number();
  c = number();
  w = word();
  nums = [a, b, c];
  mixed = [a, b, c, w];
});

describe('`arithmetic.isNum` method', () => {
  it('should return `true` if it receives an array of numbers', () => {
    expect(arithmetic.isNum(nums)).toBeTruthy();
  });
  it('should return `false` if it receives an array that contains non-numbers', () => {
    expect(arithmetic.isNum(mixed)).toBeFalsy();
  });
  it('should return `false` if its argument is not an array', () => {
    expect(arithmetic.isNum(w)).toBeFalsy();
  });
});

describe('`arithmetic.add` method', () => {
  it('should return `null` if its arguments are not all numbers', () => {
    expect(arithmetic.add(...mixed)).toBeNull();
  });
  it('should return the sum of its arguments', () => {
    const sum = a + b + c;
    expect(arithmetic.add(...nums)).toBe(sum);
  });
});

describe('`arithmetic.subtract` method', () => {
  it('should return `null` if its arguments are not all numbers', () => {
    expect(arithmetic.subtract(...mixed)).toBeNull();
  });
  it('should subtract subsequent arguments from the first argument and return the difference', () => {
    expect(arithmetic.subtract(...nums)).toBe(a - b - c);
  });
});

describe('`arithmetic.multiply` method', () => {
  it('should return `null` if its arguments are not all numbers', () => {
    expect(arithmetic.multiply(...mixed)).toBeNull();
  });
  it('should return the product of its arguments', () => {
    expect(arithmetic.multiply(...nums)).toBe(a * b * c);
  });
});

describe('`arithmetic.divide` method', () => {
  it('should return `null` if its first two arguments are not numbers', () => {
    expect(arithmetic.divide(a, w)).toBeNull();
  });
  it('should return `null` if the second argument is 0', () => {
    expect(arithmetic.divide(a, 0)).toBeNull();
  });
  it('should return the quotient of the first argument divided by its second argument', () => {
    expect(arithmetic.divide(a, b)).toBe(a / b);
  });
  it('should ignore any more than two arguments', () => {
    expect(arithmetic.divide(...nums)).toBe(a / b);
  });
});
