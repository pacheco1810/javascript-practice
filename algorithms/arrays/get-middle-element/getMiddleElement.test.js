const { getMiddleElement } = require('./getMiddleElement');

describe('getMiddleElement', () => {

    test('returns single element for odd length array', () => {
        expect(getMiddleElement([1, 2, 3, 4, 5])).toBe(3);
    });

    test('returns two elements for even length array', () => {
        expect(getMiddleElement([1, 2, 3, 4])).toEqual([2, 3]);
    });

    test('handles array with one element', () => {
        expect(getMiddleElement([42])).toBe(42);
    });

    test('handles array with two elements', () => {
        expect(getMiddleElement([10, 20])).toEqual([10, 20]);
    });

    test('handles array with three elements', () => {
        expect(getMiddleElement([5, 10, 15])).toBe(10);
    });

    test('returns null for empty array', () => {
        expect(getMiddleElement([])).toBe(null);
    });

    test('returns null for non-array input', () => {
        expect(getMiddleElement(null)).toBe(null);
        expect(getMiddleElement("not an array")).toBe(null);
        expect(getMiddleElement(123)).toBe(null);
        expect(getMiddleElement({})).toBe(null);
    });

    test('handles array with strings', () => {
        expect(getMiddleElement(["a", "b", "c", "d", "e"])).toBe("c");
        expect(getMiddleElement(["a", "b", "c", "d"])).toEqual(["b", "c"]);
    });

    test('handles array with mixed types', () => {
        expect(getMiddleElement([1, "hello", true, null, 5])).toBe(true);
    });

});