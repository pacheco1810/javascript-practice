const {
  filterEvenNumbersClassic,
  filterEvenNumbersForEach,
  filterEvenNumbersFilter
} = require('./filterEvenNumbers');

const solutions = [
  filterEvenNumbersClassic,
  filterEvenNumbersForEach,
  filterEvenNumbersFilter
];

solutions.forEach(fn => {

  test(`${fn.name} filters even numbers correctly`, () => {
    expect(fn([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  test(`${fn.name} returns empty array if no even numbers`, () => {
    expect(fn([1, 3, 5])).toEqual([]);
  });

  test(`${fn.name} handles empty array`, () => {
    expect(fn([])).toEqual([]);
  });

  test(`${fn.name} handles single element`, () => {
    expect(fn([2])).toEqual([2]);
  });

});