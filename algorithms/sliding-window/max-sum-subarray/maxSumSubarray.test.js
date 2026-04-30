const { maxSumSubarray } = require('./maxSumSubarray');

describe('maxSumSubarray', () => {

    test('returns 39 for [1,4,2,10,23,3,1,0,20] with k=4', () => {
        expect(maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    });

    test('returns 6 for [1,2,3,4,5] with k=2', () => {
        expect(maxSumSubarray([1, 2, 3, 4, 5], 2)).toBe(9);
    });

    test('returns 15 for [1,2,3,4,5] with k=5', () => {
        expect(maxSumSubarray([1, 2, 3, 4, 5], 5)).toBe(15);
    });

    test('handles array with negative numbers', () => {
        expect(maxSumSubarray([-1, -2, -3, -4], 2)).toBe(-3);
    });

    test('handles array with mixed positive and negative', () => {
        expect(maxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4], 3)).toBe(5);
    });

    test('handles single element', () => {
        expect(maxSumSubarray([10], 1)).toBe(10);
    });

    test('handles k = length of array', () => {
        expect(maxSumSubarray([2, 4, 6, 8], 4)).toBe(20);
    });

    test('handles k = 1', () => {
        expect(maxSumSubarray([3, 5, 2, 8, 1], 1)).toBe(8);
    });

});