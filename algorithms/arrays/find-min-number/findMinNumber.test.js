const { minNumberByFor, minNumberByFind, minNumberByMathMin } = require('./findMinNumber');

const solutions = [
    { name: 'minNumberByFor', fn: minNumberByFor },
    { name: 'minNumberByFind', fn: minNumberByFind },
    { name: 'minNumberByMathMin', fn: minNumberByMathMin }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('finds minimum number in array', () => {
            expect(fn([2, 5, 8, 1, 3])).toBe(1);
        });

        test('handles array with negative numbers', () => {
            expect(fn([-5, -2, -10, -1])).toBe(-10);
        });

        test('handles array with single element', () => {
            expect(fn([42])).toBe(42);
        });

        test('handles array with two elements', () => {
            expect(fn([10, 5])).toBe(5);
            expect(fn([5, 10])).toBe(5);
        });

        test('handles array with all same numbers', () => {
            expect(fn([7, 7, 7, 7])).toBe(7);
        });

        test('handles array with decimal numbers', () => {
            expect(fn([3.5, 2.1, 4.8, 1.9])).toBe(1.9);
        });

        test('handles large numbers', () => {
            expect(fn([1000, 5000, 100, 10000])).toBe(100);
        });

    });

});