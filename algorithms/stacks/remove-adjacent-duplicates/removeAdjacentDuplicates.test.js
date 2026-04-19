const { removeDuplicates } = require('./removeAdjacentDuplicates');

describe('removeDuplicates', () => {

    test('removes adjacent duplicates from "abbaca"', () => {
        expect(removeDuplicates("abbaca")).toBe("ca");
    });

    test('removes adjacent duplicates from "azxxzy"', () => {
        expect(removeDuplicates("azxxzy")).toBe("ay");
    });

    test('handles string with no duplicates', () => {
        expect(removeDuplicates("abcde")).toBe("abcde");
    });

    test('handles empty string', () => {
        expect(removeDuplicates("")).toBe("");
    });

    test('handles string with all duplicates', () => {
        expect(removeDuplicates("aaaa")).toBe("");
    });

    test('handles string with multiple duplicate pairs', () => {
        expect(removeDuplicates("abccba")).toBe("");
    });

    test('handles string with single character', () => {
        expect(removeDuplicates("a")).toBe("a");
    });

});