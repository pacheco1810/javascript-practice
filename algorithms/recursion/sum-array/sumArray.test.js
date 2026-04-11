const { sumArrayRecursive } = require('./sumArray');

describe('sumArrayRecursive', () => {

    test('sums [1, 2, 3, 4] correctly', () => {
        expect(sumArrayRecursive([1, 2, 3, 4])).toBe(10);
    });

    test('sums [5] correctly', () => {
        expect(sumArrayRecursive([5])).toBe(5);
    });

    test('returns 0 for empty array', () => {
        expect(sumArrayRecursive([])).toBe(0);
    });

    test('sums negative numbers correctly', () => {
        expect(sumArrayRecursive([-1, -2, -3])).toBe(-6);
    });

    test('sums mixed positive and negative numbers', () => {
        expect(sumArrayRecursive([10, -5, 3, -2])).toBe(6);
    });

    test('sums array with one element zero', () => {
        expect(sumArrayRecursive([0])).toBe(0);
    });

});