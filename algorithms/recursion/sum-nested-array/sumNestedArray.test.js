const { sumNestedArray } = require('./sumNestedArray');

describe('sumNestedArray', () => {

    test('sums [1, [2, [3, 4]], 5] correctly', () => {
        expect(sumNestedArray([1, [2, [3, 4]], 5])).toBe(15);
    });

    test('sums flat array correctly', () => {
        expect(sumNestedArray([1, 2, 3, 4])).toBe(10);
    });

    test('returns 0 for empty array', () => {
        expect(sumNestedArray([])).toBe(0);
    });

    test('sums deeply nested array correctly', () => {
        expect(sumNestedArray([1, [2, [3, [4, [5]]]]])).toBe(15);
    });

    test('sums with negative numbers', () => {
        expect(sumNestedArray([-1, [-2, [-3]], -4])).toBe(-10);
    });

});