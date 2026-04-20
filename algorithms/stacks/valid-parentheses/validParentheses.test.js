const { isValidParentheses } = require('./validParentheses');

describe('isValidParentheses', () => {

    test('returns true for "()"', () => {
        expect(isValidParentheses("()")).toBe(true);
    });

    test('returns true for "()[]{}"', () => {
        expect(isValidParentheses("()[]{}")).toBe(true);
    });

    test('returns true for "{[]}"', () => {
        expect(isValidParentheses("{[]}")).toBe(true);
    });

    test('returns false for "(]"', () => {
        expect(isValidParentheses("(]")).toBe(false);
    });

    test('returns false for "([)]"', () => {
        expect(isValidParentheses("([)]")).toBe(false);
    });

    test('returns false for "((("', () => {
        expect(isValidParentheses("(((")).toBe(false);
    });

    test('returns false for "(((("', () => {
        expect(isValidParentheses("((((")).toBe(false);
    });

    test('returns false for "())(()"', () => {
        expect(isValidParentheses("())(()")).toBe(false);
    });

    test('returns true for empty string', () => {
        expect(isValidParentheses("")).toBe(true);
    });

    test('returns false for single closing bracket "]"', () => {
        expect(isValidParentheses("]")).toBe(false);
    });

});