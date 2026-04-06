const { 
    getUniqueNumbers,
    hasDuplicates,
    getFirstDuplicate,
    getArrayIntersection,
    getArrayDifference
} = require('./arrayUniqueNumber');

describe('getUniqueNumbers', () => {
    test('removes duplicates from array', () => {
        expect(getUniqueNumbers([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    test('handles array with no duplicates', () => {
        expect(getUniqueNumbers([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('handles empty array', () => {
        expect(getUniqueNumbers([])).toEqual([]);
    });
});

describe('hasDuplicates', () => {
    test('returns true when array has duplicates', () => {
        expect(hasDuplicates([1, 2, 2, 3])).toBe(true);
    });

    test('returns false when array has no duplicates', () => {
        expect(hasDuplicates([1, 2, 3])).toBe(false);
    });

    test('handles empty array', () => {
        expect(hasDuplicates([])).toBe(false);
    });
});

describe('getFirstDuplicate', () => {
    test('returns first duplicate found', () => {
        expect(getFirstDuplicate([2, 1, 3, 1, 2])).toBe(1);
    });

    test('returns null when no duplicates', () => {
        expect(getFirstDuplicate([1, 2, 3])).toBe(null);
    });

    test('handles empty array', () => {
        expect(getFirstDuplicate([])).toBe(null);
    });
});

describe('getArrayIntersection', () => {
    test('returns intersection of two arrays', () => {
        expect(getArrayIntersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });

    test('handles no common elements', () => {
        expect(getArrayIntersection([1, 2], [3, 4])).toEqual([]);
    });

    test('handles duplicates in result', () => {
        expect(getArrayIntersection([1, 1, 2], [1, 2, 3])).toEqual([1, 2]);
    });
});

describe('getArrayDifference', () => {
    test('returns symmetric difference of two arrays', () => {
        expect(getArrayDifference([1, 2, 3], [2, 3, 4])).toEqual([1, 4]);
    });

    test('handles arrays with no common elements', () => {
        expect(getArrayDifference([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('handles identical arrays', () => {
        expect(getArrayDifference([1, 2, 3], [1, 2, 3])).toEqual([]);
    });

    test('handles duplicates in arrays', () => {
        expect(getArrayDifference([1, 1, 2], [1, 3])).toEqual([2, 3]);
    });
});