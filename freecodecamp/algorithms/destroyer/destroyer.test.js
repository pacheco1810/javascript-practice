const { destroyer, destroyerBySet } = require('./destroyer');

const solutions = [
  { name: 'destroyer', fn: destroyer },
  { name: 'destroyerBySet', fn: destroyerBySet }
];

solutions.forEach(({ name, fn }) => {

  describe(`${name}`, () => {

    test('removes specified values from array', () => {
      expect(fn([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
    });

    test('handles single value to remove', () => {
      expect(fn([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5]);
    });

    test('handles no values to remove', () => {
      expect(fn([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('handles multiple values to remove', () => {
      expect(fn([1, 2, 3, 4, 5, 6], 2, 4, 6)).toEqual([1, 3, 5]);
    });

    test('handles values not present in array', () => {
      expect(fn([1, 2, 3], 4, 5)).toEqual([1, 2, 3]);
    });

    test('handles empty array', () => {
      expect(fn([], 1, 2, 3)).toEqual([]);
    });

    test('handles different data types', () => {
      expect(fn([1, "hello", true, false, null], "hello", false)).toEqual([1, true, null]);
    });

    test('handles duplicate values to remove', () => {
      expect(fn([1, 2, 3, 1, 2, 3], 2, 2, 3)).toEqual([1, 1]);
    });

  });

});