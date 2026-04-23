const { backspaceCompare } = require('./backspaceCompare');

describe('backspaceCompare', () => {

    test('returns true for "ab#c" and "ad#c"', () => {
        expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
    });

    test('returns true for "ab##" and "c#d#"', () => {
        expect(backspaceCompare("ab##", "c#d#")).toBe(true);
    });

    test('returns true for "a##c" and "#a#c"', () => {
        expect(backspaceCompare("a##c", "#a#c")).toBe(true);
    });

    test('returns false for "a#c" and "b"', () => {
        expect(backspaceCompare("a#c", "b")).toBe(false);
    });

    test('handles multiple backspaces', () => {
        expect(backspaceCompare("abc###", "a#b#c#")).toBe(true);
    });

    test('handles backspace on empty stack', () => {
        expect(backspaceCompare("#", "")).toBe(true);
    });

    test('handles empty strings', () => {
        expect(backspaceCompare("", "")).toBe(true);
    });

    test('handles no backspaces', () => {
        expect(backspaceCompare("abc", "abc")).toBe(true);
        expect(backspaceCompare("abc", "abd")).toBe(false);
    });

});