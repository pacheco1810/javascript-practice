const { mergeSortedArrays } = require('./mergeSortedArrays');

describe('mergeSortedArrays', () => {

    test('merges [1,3,5] and [2,4,6] correctly', () => {
        expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('merges [1,3,5] and [2,4,6,7,8] correctly', () => {
        expect(mergeSortedArrays([1, 3, 5], [2, 4, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    test('handles first array longer than second', () => {
        expect(mergeSortedArrays([1, 4, 7, 9], [2, 5])).toEqual([1, 2, 4, 5, 7, 9]);
    });

    test('handles first array empty', () => {
        expect(mergeSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('handles second array empty', () => {
        expect(mergeSortedArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
    });

    test('handles both arrays empty', () => {
        expect(mergeSortedArrays([], [])).toEqual([]);
    });

    test('handles arrays with duplicates', () => {
        expect(mergeSortedArrays([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4]);
    });

    test('handles arrays with negative numbers', () => {
        expect(mergeSortedArrays([-3, -1, 2], [-2, 0, 5])).toEqual([-3, -2, -1, 0, 2, 5]);
    });

});