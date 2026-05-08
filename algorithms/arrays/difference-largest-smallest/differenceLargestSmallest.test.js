const { differenceByFor, differenceBySort, differenceByReduce } = require('./differenceLargestSmallest');

const solutions = [
  { name: 'differenceByFor', fn: differenceByFor },
  { name: 'differenceBySort', fn: differenceBySort },
  { name: 'differenceByReduce', fn: differenceByReduce }
];

solutions.forEach(({ name, fn }) => {

  describe(`${name}`, () => {

    test('finds difference between largest and smallest', () => {
      expect(fn([5, 10, 2, 8, 3])).toBe(8);
    });

    test('handles array with negative numbers', () => {
      expect(fn([-5, -10, -2, -8, -3])).toBe(8);
    });

    test('handles array with mixed positive and negative', () => {
      expect(fn([-5, 10, -2, 8, -3])).toBe(15);
    });

    test('handles array with single element', () => {
      expect(fn([42])).toBe(0);
    });

    test('handles array with all same numbers', () => {
      expect(fn([7, 7, 7, 7])).toBe(0);
    });

    test('handles array with two elements', () => {
      expect(fn([3, 10])).toBe(7);
    });

    test('handles empty array', () => {
      if (name === 'differenceBySort') {
        expect(fn([])).toBe(0);
      } else {
        expect(fn([])).toBe(0);
      }
    });

    test('handles array with decimal numbers', () => {
      expect(fn([3.5, 1.2, 5.8, 2.1])).toBeCloseTo(4.6);
    });

  });

});

// Specific test for differenceBySort - does not modify original array
describe('differenceBySort specific', () => {
  test('does not modify original array', () => {
    const original = [5, 10, 2, 8, 3];
    const copy = [...original];
    differenceBySort(original);
    expect(original).toEqual(copy);
  });
});