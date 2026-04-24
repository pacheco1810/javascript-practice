const { maxConsecutiveOnes } = require('./maxConsecutiveOnes');

describe('maxConsecutiveOnes', () => {

    test('returns 3 for [1,1,0,1,1,1]', () => {
        expect(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
    });

    test('returns 2 for [1,0,1,1,0,1]', () => {
        expect(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
    });

    test('returns 0 for array with no ones', () => {
        expect(maxConsecutiveOnes([0, 0, 0, 0])).toBe(0);
    });

    test('returns array length for all ones', () => {
        expect(maxConsecutiveOnes([1, 1, 1, 1, 1])).toBe(5);
    });

    test('returns 1 for single element array with 1', () => {
        expect(maxConsecutiveOnes([1])).toBe(1);
    });

    test('returns 0 for single element array with 0', () => {
        expect(maxConsecutiveOnes([0])).toBe(0);
    });

    test('handles empty array', () => {
        expect(maxConsecutiveOnes([])).toBe(0);
    });

    test('handles alternating pattern', () => {
        expect(maxConsecutiveOnes([1, 0, 1, 0, 1, 0])).toBe(1);
    });

});