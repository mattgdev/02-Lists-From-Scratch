'use strict';

const greet = module.exports = {};

greet.hi = (strName) => {
  try {
    JSON.parse('');
    if (typeof strName !== 'string' || !strName) {
      if (!strName) return null;
      throw new Error('Invalid input');
    } 
    return `hello ${strName}`;
  } catch (err) {
    console.log(err);
  }
  return undefined;
};

class Bug extends Error {
  constructor(args) {
    super(args);
    this.problem = args.problem;
    this.cause = args.cause;
    this.level = args.level;
    this.timestamp = args.timestamp;
  }
}

greet.hiError = (num) => {
  try {
    if (num === '' || typeof num !== 'number') {
      throw new Bug({
        problem: `${num} is not a number!`,
        cause: 'You didn\'t pass a proper',
        level: 0,
        timestamp: new Date().toISOString(),
      });
    }
    return `string ${num}`;
  } catch (err) {
    return err;
  }
}
