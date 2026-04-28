const { containerWithMostWater } = require('./containerWithMostWater');

describe('containerWithMostWater', () => {

    test('returns 49 for [1,8,6,2,5,4,8,3,7]', () => {
        expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });

    test('returns 1 for [1,1]', () => {
        expect(containerWithMostWater([1, 1])).toBe(1);
    });

    test('returns 16 for [4,3,2,1,4]', () => {
        expect(containerWithMostWater([4, 3, 2, 1, 4])).toBe(16);
    });

    test('returns 2 for [1,2,1]', () => {
        expect(containerWithMostWater([1, 2, 1])).toBe(2);
    });

    test('returns 0 for [0,0]', () => {
        expect(containerWithMostWater([0, 0])).toBe(0);
    });

    test('returns 1 for [1,2]', () => {
        expect(containerWithMostWater([1, 2])).toBe(1);
    });

    test('returns 17 for [2,3,10,5,7,8,9]', () => {
        expect(containerWithMostWater([2, 3, 10, 5, 7, 8, 9])).toBe(36);
    });

    test('handles array with two elements', () => {
        expect(containerWithMostWater([5, 5])).toBe(5);
    });

});