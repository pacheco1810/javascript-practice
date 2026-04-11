const { countNestedItems } = require('./countNestedItems');

describe('countNestedItems', () => {

    test('counts items in [1, [2, [3, 4]], 5] correctly', () => {
        expect(countNestedItems([1, [2, [3, 4]], 5])).toBe(5);
    });

    test('counts items in flat array', () => {
        expect(countNestedItems([1, 2, 3, 4])).toBe(4);
    });

    test('returns 0 for empty array', () => {
        expect(countNestedItems([])).toBe(0);
    });

    test('counts items in deeply nested array', () => {
        expect(countNestedItems([1, [2, [3, [4, [5]]]]])).toBe(5);
    });

    test('counts items with mixed types', () => {
        expect(countNestedItems(['a', ['b', ['c']], 'd'])).toBe(4);
    });

});