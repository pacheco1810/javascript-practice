const { uniteUnique } = require('./uniteUnique');

const solutions = [
  uniteUnique
];

solutions.forEach(fn => {

  test(`${fn.name} combines multiple arrays with unique values`, () => {
    expect(fn([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
  });

  test(`${fn.name} handles three arrays`, () => {
    expect(fn([1, 2, 3], [5, 2, 1, 4], [2, 1])).toEqual([1, 2, 3, 5, 4]);
  });

  test(`${fn.name} handles arrays with different data types`, () => {
    expect(fn([1, 2, 3], [5, 2, 1], ["a", "b"], ["b", "c"])).toEqual([1, 2, 3, 5, "a", "b", "c"]);
  });

  test(`${fn.name} handles single array`, () => {
    expect(fn([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test(`${fn.name} handles empty arrays`, () => {
    expect(fn([], [1, 2], [], [3])).toEqual([1, 2, 3]);
  });

  test(`${fn.name} preserves order of first occurrence`, () => {
    expect(fn([3, 2, 1], [2, 1, 4], [1, 5])).toEqual([3, 2, 1, 4, 5]);
  });

});