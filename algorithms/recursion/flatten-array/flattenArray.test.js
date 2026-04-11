const { flattenArray } = require('./flattenArray');

describe('flattenArray', () => {

    test('flattens [1, [2, [3, 4]], 5] correctly', () => {
        expect(flattenArray([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('flattens already flat array', () => {
        expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('handles empty array', () => {
        expect(flattenArray([])).toEqual([]);
    });

    test('flattens deeply nested array', () => {
        expect(flattenArray([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
    });

    test('handles array with no nested elements', () => {
        expect(flattenArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

});