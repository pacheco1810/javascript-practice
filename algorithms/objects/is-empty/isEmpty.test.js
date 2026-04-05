const { isEmptyByFor, isEmptyByKeys, isEmptyByJSON } = require('./isEmpty');

const solutions = [
    { name: 'isEmptyByFor', fn: isEmptyByFor },
    { name: 'isEmptyByKeys', fn: isEmptyByKeys },
    { name: 'isEmptyByJSON', fn: isEmptyByJSON }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('returns true for empty object', () => {
            expect(fn({})).toBe(true);
        });

        test('returns false for object with properties', () => {
            expect(fn({1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'})).toBe(false);
        });

        test('returns false for object with single property', () => {
            expect(fn({ name: "John" })).toBe(false);
        });

        test('returns false for object with nested properties', () => {
            expect(fn({ user: { name: "Ana" } })).toBe(false);
        });

        test('handles object with empty array value', () => {
            expect(fn({ arr: [] })).toBe(false);
        });

        test('handles object with null value', () => {
            expect(fn({ key: null })).toBe(false);
        });

        test('handles object with undefined value', () => {
            if (name === 'isEmptyByKeys') {
                // Object.keys no detecta propiedades con undefined
                expect(fn({ key: undefined })).toBe(false);
            } else if (name === 'isEmptyByJSON') {
                // JSON.stringify omite undefined
                expect(fn({ key: undefined })).toBe(true);
            } else {
                // for...in sí detecta propiedades con undefined
                expect(fn({ key: undefined })).toBe(false);
            }
        });

    });

});