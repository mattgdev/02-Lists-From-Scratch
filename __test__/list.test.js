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

  test('push:should display items pushed into array ', () => {
    expect(testList).toHaveLength(5);
    testList.push(5);
    expect(testList).toHaveLength(6);
    testList.push();
    expect(testList).toHaveLength(6);
    expect(testList[testList.length - 1]).toEqual(5);
    expect(testList.push(1, 2, 3, 4)).toEqual(9);
  });

  testList = 2;

  test('map:checks for an empty list', () => {
    const newList = new List();
    expect(() => {
      newList.map(event => event);
    }).toThrow();
  });
  testList = 0;
});

testList = 1;


test('map:tests for a function input', () => {
  expect(() => {
    testList.map('function needed');
  }).toThrow();
});

test('test for new list', () => {
  const myList = testList.map((num) => {
    return num * 2;
  });
  
  expect(myList.length).toEqual(testList.length);
  for (let i = 0; i < myList.length; i++) {
    expect(myList[i] / 2).toEqual(myList[i]);
  }
});
