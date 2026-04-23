const { reverseString } = require('./reverseString');

describe('reverseString', () => {

    test('reverses ["h","e","l","l","o"] correctly', () => {
        const input = ["h", "e", "l", "l", "o"];
        expect(reverseString(input)).toEqual(["o", "l", "l", "e", "h"]);
    });

    test('reverses ["H","a","n","n","a","h"] correctly', () => {
        const input = ["H", "a", "n", "n", "a", "h"];
        expect(reverseString(input)).toEqual(["h", "a", "n", "n", "a", "H"]);
    });

    test('handles single character array', () => {
        const input = ["a"];
        expect(reverseString(input)).toEqual(["a"]);
    });

    test('handles empty array', () => {
        const input = [];
        expect(reverseString(input)).toEqual([]);
    });

    test('handles two character array', () => {
        const input = ["a", "b"];
        expect(reverseString(input)).toEqual(["b", "a"]);
    });

});