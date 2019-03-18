'use strict';

const greet = require('../lib/greet.js');

describe('`greet` Function', () => {
  it('should return `null` if it receives an undefined argument', () => {
    expect(greet(undefined)).toBeNull();
  });
  it('should return `null` if it receives a number argument', () => {
    expect(greet(1)).toBeNull();
  });
  it('should return `null` if it receives a Boolean argument', () => {
    expect(greet(false)).toBeNull();
  });
  it('should return `null` if it receives an Object argument', () => {
    expect(greet({ hello: 'world' })).toBeNull();
  });
  it('should return `null` if it receives a Null argument', () => {
    expect(greet(null)).toBeNull();
  });

  it('should return `hello world` if the argument is `world`', () => {
    expect(greet('world')).toMatch('hello world');
  });
});
