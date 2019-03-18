'use strict';

module.exports = exports = str => {
  if (typeof str !== 'string') {
    return null;
  }
  return `hello ${str}`;
};
