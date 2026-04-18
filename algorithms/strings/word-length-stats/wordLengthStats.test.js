const { 
    countWordsByLength, 
    groupWordsByLength, 
    getMostCommonLength,
    getLongestWord
} = require('./wordLengthStats');

const testString = "Hello world this is a code test";

describe('countWordsByLength', () => {
    test('counts words by length correctly', () => {
        const result = countWordsByLength(testString);
        expect(result).toEqual({ 5: 2, 4: 3, 2: 1, 1: 1 });
    });

    test('handles empty string', () => {
        expect(countWordsByLength("")).toEqual({});
    });

    test('handles string with extra spaces', () => {
        expect(countWordsByLength("  hello   world  ")).toEqual({ 5: 2 });
    });
});

describe('groupWordsByLength', () => {
    test('groups words by length correctly', () => {
        const result = groupWordsByLength(testString);
        expect(result).toEqual({
            5: ["Hello", "world"],
            4: ["this", "code", "test"],
            2: ["is"],
            1: ["a"]
        });
    });

    test('handles empty string', () => {
        expect(groupWordsByLength("")).toEqual({});
    });
});

describe('getMostCommonLength', () => {
    test('returns most common word length', () => {
        expect(getMostCommonLength(testString)).toBe(4);
    });

    test('handles tie - returns first encountered', () => {
        const result = getMostCommonLength("cat dog bird fish");
        // cat(3), dog(3), bird(4), fish(4) -> 3 y 4 tienen 2 cada uno
        // Como 3 aparece primero, debería retornar 3
        expect(result).toBe(3);
    });

    test('handles empty string', () => {
        expect(getMostCommonLength("")).toBe(0);
    });
});

describe('getLongestWord', () => {
    test('returns longest word(s)', () => {
        expect(getLongestWord(testString)).toEqual(["Hello", "world"]);
    });

    test('returns single longest word', () => {
        expect(getLongestWord("one three three")).toEqual(["three", "three"]);
    });

    test('handles empty string', () => {
        expect(getLongestWord("")).toEqual([]);
    });

    test('handles single word', () => {
        expect(getLongestWord("hello")).toEqual(["hello"]);
    });
});