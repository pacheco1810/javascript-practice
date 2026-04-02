const { 
    words, 
    countWords, 
    countWordsByLength, 
    groupWordsByLength, 
    groupByFirstLetter 
} = require('./wordCounter');

describe('Word Counter Functions', () => {

    test('countWords counts frequency of each word', () => {
        const result = countWords(words);
        expect(result).toEqual({ apple: 2, banana: 1, orange: 1 });
    });

    test('countWords handles empty array', () => {
        expect(countWords([])).toEqual({});
    });

    test('countWordsByLength counts words by length', () => {
        const result = countWordsByLength(words);
        expect(result).toEqual({ 5: 2, 6: 2 });
    });

    test('countWordsByLength handles empty array', () => {
        expect(countWordsByLength([])).toEqual({});
    });

    test('groupWordsByLength groups words by length', () => {
        const result = groupWordsByLength(words);
        expect(result).toEqual({ 
            5: ["apple", "apple"], 
            6: ["banana", "orange"] 
        });
    });

    test('groupWordsByLength handles empty array', () => {
        expect(groupWordsByLength([])).toEqual({});
    });

    test('groupByFirstLetter counts words by first letter', () => {
        const result = groupByFirstLetter(words);
        expect(result).toEqual({ a: 2, b: 1, o: 1 });
    });

    test('groupByFirstLetter handles empty array', () => {
        expect(groupByFirstLetter([])).toEqual({});
    });

    test('groupByFirstLetter is case insensitive', () => {
        const mixedCase = ["Apple", "banana", "apple", "Orange"];
        const result = groupByFirstLetter(mixedCase);
        expect(result).toEqual({ a: 2, b: 1, o: 1 });
    });

});