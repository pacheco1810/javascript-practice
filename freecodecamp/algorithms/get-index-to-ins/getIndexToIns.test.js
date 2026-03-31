const { getIndexToIns } = require('./getIndexToIns');

const solutions = [
  getIndexToIns
];

solutions.forEach(fn => {

  test(`${fn.name} returns correct index for [10, 20, 30, 40, 50] with 35`, () => {
    expect(fn([10, 20, 30, 40, 50], 35)).toBe(3);
  });

  test(`${fn.name} returns correct index for [5, 3, 20, 3] with 5`, () => {
    expect(fn([5, 3, 20, 3], 5)).toBe(2);
  });

  test(`${fn.name} returns correct index for [2, 5, 10] with 15`, () => {
    expect(fn([2, 5, 10], 15)).toBe(3);
  });

  test(`${fn.name} returns correct index for [1, 2, 3, 4] with 2.5`, () => {
    expect(fn([1, 2, 3, 4], 2.5)).toBe(2);
  });

  test(`${fn.name} returns 0 when num is smallest`, () => {
    expect(fn([10, 20, 30], 5)).toBe(0);
  });

  test(`${fn.name} returns arr.length when num is largest`, () => {
    expect(fn([10, 20, 30], 35)).toBe(3);
  });

  test(`${fn.name} handles empty array`, () => {
    expect(fn([], 5)).toBe(0);
  });

  test(`${fn.name} handles array with duplicate values`, () => {
    expect(fn([3, 3, 3, 3], 3)).toBe(0);
  });

  test(`${fn.name} handles negative numbers`, () => {
    expect(fn([-5, -2, 0, 4], -3)).toBe(1);
  });

});