const { analyzeText } = require('./analyzeText');

describe('analyzeText', () => {

    test('analyzes text with repeated words case-insensitively', () => {
        const result = analyzeText("Hello world hello WORLD test Test");
        
        expect(result.wordCount).toEqual({
            hello: 2,
            world: 2,
            test: 2
        });
        expect(result.mostFrequent).toEqual(["hello", "world", "test"]);
        expect(result.uniqueWords).toBe(3);
    });

    test('handles single word', () => {
        const result = analyzeText("hello");
        
        expect(result.wordCount).toEqual({ hello: 1 });
        expect(result.mostFrequent).toEqual(["hello"]);
        expect(result.uniqueWords).toBe(1);
    });

    test('handles empty string', () => {
        const result = analyzeText("");
        
        expect(result.wordCount).toEqual({});
        expect(result.mostFrequent).toEqual([]);
        expect(result.uniqueWords).toBe(0);
    });

    test('handles string with extra spaces', () => {
        const result = analyzeText("  hello   world  hello  ");
        
        expect(result.wordCount).toEqual({ hello: 2, world: 1 });
        expect(result.mostFrequent).toEqual(["hello"]);
        expect(result.uniqueWords).toBe(2);
    });

    test('handles single word repeated', () => {
        const result = analyzeText("test test test");
        
        expect(result.wordCount).toEqual({ test: 3 });
        expect(result.mostFrequent).toEqual(["test"]);
        expect(result.uniqueWords).toBe(1);
    });

    test('handles all unique words', () => {
        const result = analyzeText("one two three four");
        
        expect(result.wordCount).toEqual({ one: 1, two: 1, three: 1, four: 1 });
        expect(result.mostFrequent).toEqual(["one", "two", "three", "four"]);
        expect(result.uniqueWords).toBe(4);
    });

});