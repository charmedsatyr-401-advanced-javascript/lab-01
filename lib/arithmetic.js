'use strict';

let arithmetic = (module.exports = {});

arithmetic.isNum = nums => {
  if (Array.isArray(nums)) {
    return nums.every(num => typeof num === 'number');
  } else {
    return false;
  }
};

const { isNum } = arithmetic;

arithmetic.add = (...nums) => {
  if (!isNum(nums)) {
    return null;
  }

  return nums.reduce((acc, curr) => acc + curr, 0);
};

arithmetic.subtract = (...nums) => {
  if (!isNum(nums)) {
    return null;
  }
  return nums.reduce((acc, curr, i) => {
    if (i > 0) {
      return acc - curr;
    }
    return acc;
  }, nums[0]);
};

arithmetic.multiply = (...nums) => {
  if (!isNum(nums)) {
    return null;
  }
  return nums.reduce((acc, curr) => acc * curr);
};

arithmetic.divide = (a, b) => {
  if (!isNum([a, b]) || b === 0) {
    return null;
  }
  return a / b;
};
