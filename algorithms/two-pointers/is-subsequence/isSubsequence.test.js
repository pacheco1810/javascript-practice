const { isSubsequenceByFor, isSubsequenceByTwoPointers } = require('./isSubsequence');

const solutions = [
    { name: 'isSubsequenceByFor', fn: isSubsequenceByFor },
    { name: 'isSubsequenceByTwoPointers', fn: isSubsequenceByTwoPointers }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('returns true when "abc" is subsequence of "ahbgdc"', () => {
            expect(fn("abc", "ahbgdc")).toBe(true);
        });

        test('returns false when "axc" is not subsequence of "ahbgdc"', () => {
            expect(fn("axc", "ahbgdc")).toBe(false);
        });

        test('returns true for empty string s', () => {
            expect(fn("", "anything")).toBe(true);
        });

        test('returns false when s is longer than t', () => {
            expect(fn("abcdef", "abc")).toBe(false);
        });

        test('returns true when s equals t', () => {
            expect(fn("abc", "abc")).toBe(true);
        });

        test('returns true when s is single character present in t', () => {
            expect(fn("c", "abc")).toBe(true);
        });

        test('returns false when s is single character not in t', () => {
            expect(fn("d", "abc")).toBe(false);
        });

        test('handles large strings', () => {
            expect(fn("abc", "aaaaaabbbbbbbccccccc")).toBe(true);
        });

    });

});