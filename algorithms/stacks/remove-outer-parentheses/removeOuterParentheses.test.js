const { removeOuterParentheses } = require('./removeOuterParentheses');

describe('removeOuterParentheses', () => {

    test('removes outer parentheses from "(()())(())"', () => {
        expect(removeOuterParentheses("(()())(())")).toBe("()()()");
    });

    test('removes outer parentheses from "(()())(())(()(()))"', () => {
        expect(removeOuterParentheses("(()())(())(()(()))")).toBe("()()()()(())");
    });

    test('removes outer parentheses from "()()"', () => {
        expect(removeOuterParentheses("()()")).toBe("");
    });

    test('removes outer parentheses from "((()))"', () => {
        expect(removeOuterParentheses("((()))")).toBe("(())");
    });

    test('removes outer parentheses from "(()())"', () => {
        expect(removeOuterParentheses("(()())")).toBe("()()");
    });

    test('handles empty string', () => {
        expect(removeOuterParentheses("")).toBe("");
    });

    test('handles single primitive "()"', () => {
        expect(removeOuterParentheses("()")).toBe("");
    });

});