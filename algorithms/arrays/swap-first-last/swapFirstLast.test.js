const { 
  swapFirstAndLastByTemVar, 
  swapFirstAndLastBySplice, 
  swapFirstAndLastBySpread 
} = require('./swapFirstLast');

const solutions = [
  { name: 'swapFirstAndLastByTemVar', fn: swapFirstAndLastByTemVar },
  { name: 'swapFirstAndLastBySplice', fn: swapFirstAndLastBySplice },
  { name: 'swapFirstAndLastBySpread', fn: swapFirstAndLastBySpread }
];

solutions.forEach(({ name, fn }) => {

  describe(`${name}`, () => {

    test('swaps first and last elements of [1,2,3,4]', () => {
      expect(fn([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
    });

    test('swaps first and last elements of ["a","b","c"]', () => {
      expect(fn(["a", "b", "c"])).toEqual(["c", "b", "a"]);
    });

    test('handles array with two elements', () => {
      expect(fn([10, 20])).toEqual([20, 10]);
    });

    test('handles array with single element', () => {
      expect(fn([42])).toEqual([42]);
    });

    test('handles array with mixed types', () => {
      expect(fn([1, "hello", true, null])).toEqual([null, "hello", true, 1]);
    });

  });

});

// Edge case tests for empty array
describe('Edge cases', () => {
  test('handles empty array', () => {
    expect(swapFirstAndLastByTemVar([])).toEqual([]);
    expect(swapFirstAndLastBySplice([])).toEqual([]);
    expect(swapFirstAndLastBySpread([])).toEqual([]);
  });
});