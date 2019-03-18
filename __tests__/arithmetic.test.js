'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('`arithmetic.add` Method', () => {
  it('should return `null` if it does not receive two numbers for arguments', () => {
    expect(arithmetic.add('a', 0)).toBeNull();
  });
  it('should returns the sum of its two number arguments', () => {
    expect(arithmetic.add(2, 4)).toBe(6);
  });
  it('should ignore any more than two arguments', () => {
    expect(arithmetic.add(1, 2, 3, 4)).toBe(3);
  });
});

describe('`arithmetic.subtract` Method', () => {
  it('should return `null` if it does not receive two numbers for arguments', () => {
    expect(arithmetic.subtract('a', 0)).toBeNull();
  });
  it('should return the difference of its two arguments', () => {
    expect(arithmetic.subtract(4, 3)).toBe(1);
  });
  it('should ignore any more than two arguments', () => {
    expect(arithmetic.subtract(2, 1, 3, 4)).toBe(1);
  });
});

describe('`arithmetic.multiply` Method', () => {
  it('should return `null` if it does not receive two numbers for arguments', () => {
    expect(arithmetic.multiply('a', 0)).toBeNull();
  });
  it('should return the product of its two arguments', () => {
    expect(arithmetic.multiply(4, 3)).toBe(12);
  });
  it('should ignore any more than two arguments', () => {
    expect(arithmetic.multiply(2, 1, 3, 4)).toBe(2);
  });
});

describe('`arithmetic.divide` Method', () => {
  it('should return `null` if it does not receive two numbers for arguments', () => {
    expect(arithmetic.divide('a', 1)).toBeNull();
  });
  it('should return `null` if the second argument is 0', () => {
    expect(arithmetic.divide(1, 0)).toBeNull();
  });
  it('should return the quotient of its two arguments', () => {
    expect(arithmetic.divide(100, 50)).toBe(2);
  });
  it('should ignore any more than two arguments', () => {
    expect(arithmetic.divide(2, 1, 3, 4)).toBe(2);
  });
});
