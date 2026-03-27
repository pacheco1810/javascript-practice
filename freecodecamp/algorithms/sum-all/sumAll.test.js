const { sumAll } = require('./sumAll');

const solutions = [
  sumAll
];

solutions.forEach(fn => {

  test(`${fn.name} sums numbers in range [10, 5]`, () => {
    expect(fn([10, 5])).toBe(45);
  });

  test(`${fn.name} sums numbers in range [1, 4]`, () => {
    expect(fn([1, 4])).toBe(10);
  });

  test(`${fn.name} sums numbers in range [5, 10]`, () => {
    expect(fn([5, 10])).toBe(45);
  });

  test(`${fn.name} handles range with same numbers`, () => {
    expect(fn([5, 5])).toBe(5);
  });

  test(`${fn.name} handles negative numbers`, () => {
    expect(fn([-3, 2])).toBe(-3 + -2 + -1 + 0 + 1 + 2);
  });

  test(`${fn.name} handles range [0, 5]`, () => {
    expect(fn([0, 5])).toBe(15);
  });

});