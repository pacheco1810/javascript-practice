const { containsWithFor, contains, containsWithFilter } = require('./containsValue');

const solutions = [
    { name: 'containsWithFor', fn: containsWithFor },
    { name: 'contains', fn: contains },
    { name: 'containsWithFilter', fn: containsWithFilter }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('returns true when value exists in array', () => {
            expect(fn([10, 20, 30], 20)).toBe(true);
        });

        test('returns false when value does not exist in array', () => {
            expect(fn([10, 20, 30], 50)).toBe(false);
        });

        test('handles array with strings', () => {
            expect(fn(["apple", "banana", "orange"], "banana")).toBe(true);
            expect(fn(["apple", "banana", "orange"], "grape")).toBe(false);
        });

        test('handles array with mixed data types', () => {
            expect(fn([1, "hello", true, null], "hello")).toBe(true);
            expect(fn([1, "hello", true, null], false)).toBe(false);
        });

        test('handles empty array', () => {
            expect(fn([], 5)).toBe(false);
        });

        test('handles array with single element', () => {
            expect(fn([42], 42)).toBe(true);
            expect(fn([42], 7)).toBe(false);
        });

        test('handles boolean values', () => {
            expect(fn([true, false, true], true)).toBe(true);
            expect(fn([true, false, true], false)).toBe(true);
        });

        test('handles null and undefined', () => {
            expect(fn([null, undefined, 0], null)).toBe(true);
            expect(fn([null, undefined, 0], undefined)).toBe(true);
        });

    });

});