const { removeDuplicatesK } = require('./removeDuplicatesK');

describe('removeDuplicatesK', () => {

    test('removes 3 adjacent duplicates from "deeedbbcccbdaa"', () => {
        expect(removeDuplicatesK("deeedbbcccbdaa", 3)).toBe("aa");
    });

    test('removes 2 adjacent duplicates from "abbaca"', () => {
        expect(removeDuplicatesK("abbaca", 2)).toBe("ca");
    });

    test('handles string with no k duplicates', () => {
        expect(removeDuplicatesK("abcde", 2)).toBe("abcde");
    });

    test('handles empty string', () => {
        expect(removeDuplicatesK("", 3)).toBe("");
    });

    test('handles k = 1 (removes all characters)', () => {
        expect(removeDuplicatesK("abc", 1)).toBe("abc");
    });

    test('handles multiple removals that create new k duplicates', () => {
        expect(removeDuplicatesK("abcddcba", 2)).toBe("");
    });

    test('handles single character repeated k times', () => {
        expect(removeDuplicatesK("aaaa", 3)).toBe("a");
    });

    test('handles k larger than any repetition', () => {
        expect(removeDuplicatesK("aabbcc", 5)).toBe("aabbcc");
    });

});