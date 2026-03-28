const { isPeak, firstPeakNumber, allPeakNumber, firstOrLastPeak } = require('./peaks');

describe('Peak Functions', () => {

    test('isPeak detects peak correctly with non-strict mode', () => {
        expect(isPeak([1, 2, 1], false, 1)).toBe(true);
        expect(isPeak([1, 2, 2, 1], false, 1)).toBe(true);
        expect(isPeak([1, 2, 2, 1], false, 2)).toBe(true);
        expect(isPeak([1, 2, 3], false, 2)).toBe(true);
        expect(isPeak([3, 2, 1], false, 0)).toBe(true);
    });

    test('isPeak detects peak correctly with strict mode', () => {
        expect(isPeak([1, 2, 1], true, 1)).toBe(true);
        expect(isPeak([1, 2, 2, 1], true, 1)).toBe(false);
        expect(isPeak([1, 2, 2, 1], true, 2)).toBe(false);
        expect(isPeak([1, 2, 3], true, 2)).toBe(true);
        expect(isPeak([3, 2, 1], true, 0)).toBe(true);
    });

    test('firstPeakNumber returns first peak', () => {
        expect(firstPeakNumber([2, 3, 2, 4, 2, 5], false)).toBe(3);
        expect(firstPeakNumber([1, 2, 3, 4, 5], false)).toBe(5);
        expect(firstPeakNumber([5, 4, 3, 2, 1], false)).toBe(5);
        expect(firstPeakNumber([1, 1, 1, 1], false)).toBe(1);
        expect(firstPeakNumber([1, 1, 1, 1], true)).toBe(null);
    });

    test('allPeakNumber returns all peaks', () => {
        expect(allPeakNumber([2, 3, 2, 4, 2, 5], false)).toEqual([3, 4, 5]);
        expect(allPeakNumber([1, 2, 3, 4, 5], false)).toEqual([5]);
        expect(allPeakNumber([5, 4, 3, 2, 1], false)).toEqual([5]);
        expect(allPeakNumber([1, 1, 1, 1], false)).toEqual([1, 1, 1, 1]);
        expect(allPeakNumber([1, 1, 1, 1], true)).toBe(null);
    });

    test('firstOrLastPeak returns first peak', () => {
        expect(firstOrLastPeak([2, 3, 2, 4, 2, 5], false, "first")).toBe(3);
    });

    test('firstOrLastPeak returns last peak', () => {
        expect(firstOrLastPeak([2, 3, 2, 4, 2, 5], false, "last")).toBe(5);
    });

    test('firstOrLastPeak returns null for invalid mode', () => {
        expect(firstOrLastPeak([2, 3, 2, 4, 2, 5], false, "middle")).toBe(null);
    });

    test('firstOrLastPeak returns null when no peaks', () => {
        expect(firstOrLastPeak([1, 1, 1, 1], true, "first")).toBe(null);
        expect(firstOrLastPeak([1, 1, 1, 1], true, "last")).toBe(null);
    });

});