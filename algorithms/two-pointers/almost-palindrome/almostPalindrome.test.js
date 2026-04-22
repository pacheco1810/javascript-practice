const { isAlmostPalindrome } = require('./almostPalindrome');

describe('isAlmostPalindrome', () => {

    test('returns true for "racecar" (already palindrome)', () => {
        expect(isAlmostPalindrome("racecar")).toBe(true);
    });

    test('returns true for "abca" (remove "b" or "c")', () => {
        expect(isAlmostPalindrome("abca")).toBe(true);
    });

    test('returns false for "abc" (cannot become palindrome)', () => {
        expect(isAlmostPalindrome("abc")).toBe(false);
    });

    test('returns true for "deee" (remove "d")', () => {
        expect(isAlmostPalindrome("deee")).toBe(true);
    });

    test('returns true for "aba" (already palindrome)', () => {
        expect(isAlmostPalindrome("aba")).toBe(true);
    });

    test('returns true for "a" (single character)', () => {
        expect(isAlmostPalindrome("a")).toBe(true);
    });

    test('returns true for "ab" (remove one character)', () => {
        expect(isAlmostPalindrome("ab")).toBe(true);
    });

    test('returns true for "abca"', () => {
        expect(isAlmostPalindrome("abca")).toBe(true);
    });

    test('returns false for "abcdef"', () => {
        expect(isAlmostPalindrome("abcdef")).toBe(false);
    });

    test('returns true for "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"', () => {
        expect(isAlmostPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga")).toBe(true);
    });

});