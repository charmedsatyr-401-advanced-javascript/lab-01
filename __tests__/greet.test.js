'use strict';

const greet = require('../lib/greet.js');

const { boolean, number, objectElement, words } = require('faker').random;

describe('`greet` Function', () => {
  it('should return `null` if it receives an undefined argument', () => {
    expect(greet(undefined)).toBeNull();
  });
  it('should return `null` if it receives a number argument', () => {
    expect(greet(number())).toBeNull();
  });
  it('should return `null` if it receives a Boolean argument', () => {
    expect(greet(boolean())).toBeNull();
  });
  it('should return `null` if it receives an Object argument', () => {
    expect(greet({ hello: objectElement() })).toBeNull();
  });
  it('should return `null` if it receives a null argument', () => {
    expect(greet(null)).toBeNull();
  });
  it('should return a string beginning with `hello ` if it receives a string argument', () => {
    expect(greet(words())).toMatch(/hello\s[\w\s]*/g);
  });
  it('should return `hello world` if the argument is `world`', () => {
    expect(greet('world')).toMatch(/hello world/);
  });
});
