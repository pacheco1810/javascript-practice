const { longestOnes } = require('./longestOnes');

describe('longestOnes', () => {

    test('returns 8 for [1,1,0,0,1,1,1,0,1,1,0,0,1,1,1] with k=2', () => {
        expect(longestOnes([1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1], 2)).toBe(7);
    });

    test('returns 6 for [1,1,1,0,0,0,1,1,1,1,0] with k=2', () => {
        expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
    });

    test('returns 10 for [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1] with k=3', () => {
        expect(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10);
    });

    test('returns array length when k >= zeros count', () => {
        expect(longestOnes([1, 1, 1, 1], 2)).toBe(4);
    });

    test('returns array length when k is large', () => {
        expect(longestOnes([0, 0, 0, 0], 10)).toBe(4);
    });

    test('handles k = 0', () => {
        expect(longestOnes([1, 1, 0, 1, 1, 0, 1], 0)).toBe(2);
    });

    test('handles empty array', () => {
        expect(longestOnes([], 2)).toBe(0);
    });

    test('handles all zeros with k=0', () => {
        expect(longestOnes([0, 0, 0, 0], 0)).toBe(0);
    });

});