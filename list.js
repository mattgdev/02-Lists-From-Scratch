'use strict';

const List = module.exports = class {
  constructor() {
    this.length = 0;
  }

  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
      this.length += 1;
    }
    return this.length;
  }

  forEach(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    if (!this.length) {
      throw new Error('Empty');
    }
  }

  map(func) {
    if (typeof func !== 'function') {
      throw new Error(' Expected a fuction');
    }
    if (!this.length) {
      throw new Error('List is empty');
    }
    const results = new List();
    for (let i = 0; i < this.length; i++) {
      results.push(func(this[i], i));
    }
    return results;
  }

  filter(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    let results = new List();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i)) {
        results.push(this[i]);
      }
    }
    console.log(results);
    return results;
  }
  
  reduce(func, state) {
    if (!this.length) {
      return undefined;
    }
    if (!state) {
      state = this[0];
      for (let i = 0; i < this.length; i++) {
      state = func(state, this[i], i);
      }
    }
    return state;
  }
};

