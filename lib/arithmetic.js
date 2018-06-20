'use strict';

const math = module.exports = {};

math.add = (x, y) => {
  if (typeof x !== 'number') return null;
  if (typeof y !== 'number') return null;
  if (typeof x === 'number') {
    if (typeof y === 'number') {
      return x + y;
    }
  }
  return undefined;
};

math.sub = (x, y) => {
  if (typeof x !== 'number') return null;
  if (typeof y !== 'number') return null;
  if (typeof x === 'number') {
    if (typeof y === 'number') {
      return x - y;
    }
  }
  return undefined;
};
  
