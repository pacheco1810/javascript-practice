const { minAddToMakeValid } = require('./minAddToMakeValid');

describe('minAddToMakeValid', () => {

    test('returns 1 for "())"', () => {
        expect(minAddToMakeValid("())")).toBe(1);
    });

    test('returns 3 for "((("', () => {
        expect(minAddToMakeValid("(((")).toBe(3);
    });

    test('returns 4 for "()))(("', () => {
        expect(minAddToMakeValid("()))((")).toBe(4);
    });

    test('returns 0 for "()"', () => {
        expect(minAddToMakeValid("()")).toBe(0);
    });

    test('returns 0 for "()()()"', () => {
        expect(minAddToMakeValid("()()()")).toBe(0);
    });

    test('returns 2 for "))(("', () => {
        expect(minAddToMakeValid("))((")).toBe(4);
    });

    test('returns 1 for "(()"', () => {
        expect(minAddToMakeValid("(()")).toBe(1);
    });

    test('returns 2 for ")(()"', () => {
        expect(minAddToMakeValid(")(()")).toBe(2);
    });

    test('returns 0 for empty string', () => {
        expect(minAddToMakeValid("")).toBe(0);
    });

});