const { longestUniqueSubstring } = require('./longestUniqueSubstring');

describe('longestUniqueSubstring', () => {

    test('returns 3 for "abcabcbb"', () => {
        expect(longestUniqueSubstring("abcabcbb")).toBe(3);
    });

    test('returns 1 for "bbbbb"', () => {
        expect(longestUniqueSubstring("bbbbb")).toBe(1);
    });

    test('returns 3 for "pwwkew"', () => {
        expect(longestUniqueSubstring("pwwkew")).toBe(3);
    });

    test('returns 0 for empty string', () => {
        expect(longestUniqueSubstring("")).toBe(0);
    });

    test('returns 1 for single character', () => {
        expect(longestUniqueSubstring("a")).toBe(1);
    });

    test('returns 7 for "abcdefg"', () => {
        expect(longestUniqueSubstring("abcdefg")).toBe(7);
    });

    test('returns 3 for "dvdf"', () => {
        expect(longestUniqueSubstring("dvdf")).toBe(3);
    });

});