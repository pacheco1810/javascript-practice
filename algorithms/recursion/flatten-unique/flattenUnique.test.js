const { flattenUnique } = require('./flattenUnique');

describe('flattenUnique', () => {

    test('flattens [1, [2, [2, 3]], 3, 4] and removes duplicates', () => {
        expect(flattenUnique([1, [2, [2, 3]], 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('handles already flat array with duplicates', () => {
        expect(flattenUnique([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('handles empty array', () => {
        expect(flattenUnique([])).toEqual([]);
    });

    test('handles deeply nested array with duplicates', () => {
        expect(flattenUnique([1, [2, [2, [3, [3, 4]]]], 4])).toEqual([1, 2, 3, 4]);
    });

    test('handles array with no duplicates', () => {
        expect(flattenUnique([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
    });

});