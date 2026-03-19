const {
  removeDuplicatesClassic,
  removeDuplicatesForEach,
  removeDuplicatesFilter
} = require('./removeDuplicates');

const solutions = [
  removeDuplicatesClassic,
  removeDuplicatesForEach,
  removeDuplicatesFilter
];

solutions.forEach(fn => {

  test(`${fn.name} removes duplicates correctly`, () => {
    expect(fn([1,2,2,3,4,4])).toEqual([1,2,3,4]);
  });

  test(`${fn.name} handles empty array`, () => {
    expect(fn([])).toEqual([]);
  });

  test(`${fn.name} handles single element`, () => {
    expect(fn([1])).toEqual([1]);
  });

  test(`${fn.name} handles all duplicates`, () => {
    expect(fn([2,2,2])).toEqual([2]);
  });

});