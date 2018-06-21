'use strict';

const List = require('../list');

describe('testing functionality', () => {
  let testList;
  
  beforeEach(() => {
    testList = new List();
    testList.push(34, 76, 17, 84, 12);
    for (let i = 0; i <= 7; i++) {
      testList.push(i);
    }
  });

  afterEach(() => {
    testList = null;
  });

  test('should display items pushed into array ', () => {
    expect(x).toHaveLength();
  });
});
