const { sumPositivesByFor, sumPositivesByMethods } = require('./sumPositives');

const solutions = [
    { name: 'sumPositivesByFor', fn: sumPositivesByFor },
    { name: 'sumPositivesByMethods', fn: sumPositivesByMethods }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('sums positive numbers from [1, -2, 3, -4, 5]', () => {
            expect(fn([1, -2, 3, -4, 5])).toBe(9);
        });

        test('handles array with no positive numbers', () => {
            expect(fn([-1, -2, -3])).toBe(0);
        });

        test('handles array with all positive numbers', () => {
            expect(fn([1, 2, 3, 4])).toBe(10);
        });

        test('handles zeros (not positive)', () => {
            expect(fn([0, -1, 0, -2])).toBe(0);
        });

        test('handles empty array', () => {
            expect(fn([])).toBe(0);
        });

        test('handles array with mixed numbers', () => {
            expect(fn([-5, 4, -3, 2, -1, 8])).toBe(14);
        });

        test('handles array with one positive number', () => {
            expect(fn([-1, -2, 10, -3])).toBe(10);
        });

    });

});