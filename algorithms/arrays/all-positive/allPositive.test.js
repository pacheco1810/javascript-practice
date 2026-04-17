const { allNumbersByFor, allNumbersByEvery } = require('./allPositive');

const solutions = [
    { name: 'allNumbersByFor', fn: allNumbersByFor },
    { name: 'allNumbersByEvery', fn: allNumbersByEvery }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('returns true when all numbers are positive', () => {
            expect(fn([1, 5, 7, 1])).toBe(true);
        });

        test('returns false when any number is zero', () => {
            expect(fn([1, 0, 7, 1])).toBe(false);
        });

        test('returns false when any number is negative', () => {
            expect(fn([1, -5, 7, 1])).toBe(false);
        });

        test('handles array with single positive number', () => {
            expect(fn([5])).toBe(true);
        });

        test('handles array with single zero', () => {
            expect(fn([0])).toBe(false);
        });

        test('handles array with single negative number', () => {
            expect(fn([-3])).toBe(false);
        });

        test('handles empty array', () => {
            expect(fn([])).toBe(true);
        });

        test('handles array with decimal numbers', () => {
            expect(fn([0.5, 1.5, 2.5])).toBe(true);
            expect(fn([0.5, -1.5, 2.5])).toBe(false);
        });

    });

});