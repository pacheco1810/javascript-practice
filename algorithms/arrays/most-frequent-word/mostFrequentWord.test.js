const { mostFrequentWord } = require('./mostFrequentWord');

describe('mostFrequentWord', () => {

    test('returns most frequent word from array', () => {
        const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
        expect(mostFrequentWord(words)).toBe("apple");
    });

    test('returns first word when frequency is tied', () => {
        const words = ["apple", "banana", "apple", "banana"];
        expect(mostFrequentWord(words)).toBe("apple");
    });

    test('returns word with highest count', () => {
        const words = ["cat", "dog", "cat", "bird", "cat", "dog"];
        expect(mostFrequentWord(words)).toBe("cat");
    });

    test('handles single word array', () => {
        expect(mostFrequentWord(["hello"])).toBe("hello");
    });

    test('handles array with one word repeated', () => {
        expect(mostFrequentWord(["test", "test", "test"])).toBe("test");
    });

    test('ignores non-string elements', () => {
        const words = ["apple", 123, "banana", null, "apple", true];
        expect(mostFrequentWord(words)).toBe("apple");
    });

    test('ignores empty string elements', () => {
        const words = ["apple", "", "banana", "   ", "apple"];
        expect(mostFrequentWord(words)).toBe("apple");
    });

    test('returns null for empty array', () => {
        expect(mostFrequentWord([])).toBe(null);
    });

    test('returns null for non-array input', () => {
        expect(mostFrequentWord(null)).toBe(null);
        expect(mostFrequentWord("not an array")).toBe(null);
        expect(mostFrequentWord(123)).toBe(null);
    });

    test('returns null for array with only invalid strings', () => {
        expect(mostFrequentWord(["", "   ", "  "])).toBe(null);
    });

});