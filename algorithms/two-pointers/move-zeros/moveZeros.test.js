const { moveZeros } = require('./moveZeros');

describe('moveZeros', () => {

    test('moves zeros in [0,1,0,3,12] correctly', () => {
        expect(moveZeros([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    });

    test('handles array with no zeros', () => {
        expect(moveZeros([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('handles array with all zeros', () => {
        expect(moveZeros([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
    });

    test('handles array with single element zero', () => {
        expect(moveZeros([0])).toEqual([0]);
    });

    test('handles array with single element non-zero', () => {
        expect(moveZeros([5])).toEqual([5]);
    });

    test('handles empty array', () => {
        expect(moveZeros([])).toEqual([]);
    });

    test('handles zeros at the end', () => {
        expect(moveZeros([1, 2, 0, 0, 3])).toEqual([1, 2, 3, 0, 0]);
    });

    test('handles zeros at the beginning', () => {
        expect(moveZeros([0, 0, 1, 2, 3])).toEqual([1, 2, 3, 0, 0]);
    });

    test('handles negative numbers', () => {
        expect(moveZeros([-1, 0, -2, 0, 3])).toEqual([-1, -2, 3, 0, 0]);
    });

});