const { diffArrayV1, diffArray } = require('./diffArray');

const solutions = [
  { name: 'diffArrayV1', fn: diffArrayV1 },
  { name: 'diffArray', fn: diffArray }
];

solutions.forEach(({ name, fn }) => {

  describe(`${name}`, () => {

    test('returns symmetric difference of two arrays', () => {
      const arr1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];
      const arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
      expect(fn(arr1, arr2)).toEqual(["pink wool"]);
    });

    test('handles arrays with different lengths', () => {
      expect(fn([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
    });

    test('returns empty array when arrays are identical', () => {
      expect(fn([1, 2, 3], [1, 2, 3])).toEqual([]);
    });

    test('returns all elements when arrays have no common elements', () => {
      expect(fn([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('handles arrays with duplicate values', () => {
      expect(fn([1, 1, 2, 3], [1, 2, 4])).toEqual([3, 4]);
    });

    test('handles arrays with different data types', () => {
      expect(fn([1, "hello", true], [1, "world", false])).toEqual(["hello", true, "world", false]);
    });

    test('handles empty first array', () => {
      expect(fn([], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('handles empty second array', () => {
      expect(fn([1, 2, 3], [])).toEqual([1, 2, 3]);
    });

  });

});