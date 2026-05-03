const { findMissingNumber, findMissingNumber2, findMissingNumberByXor } = require('./findMissingNumber');

const solutions = [
    { name: 'findMissingNumber', fn: findMissingNumber },
    { name: 'findMissingNumber2', fn: findMissingNumber2 },
    { name: 'findMissingNumberByXor', fn: findMissingNumberByXor }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('finds missing number 4 in [0,1,3,2]', () => {
            expect(fn([0, 1, 3, 2])).toBe(4);
        });

        test('finds missing number 3 in [0,1,2,4]', () => {
            expect(fn([0, 1, 2, 4])).toBe(3);
        });

        test('finds missing number 0 in [1,2,3]', () => {
            expect(fn([1, 2, 3])).toBe(0);
        });

        test('finds missing number n in [0,1,2,3]', () => {
            expect(fn([0, 1, 2, 3])).toBe(4);
        });

        test('handles single element [0]', () => {
            expect(fn([0])).toBe(1);
        });

        test('handles single element [1]', () => {
            expect(fn([1])).toBe(0);
        });

        test('handles empty array', () => {
            expect(fn([])).toBe(0);
        });

        test('handles unsorted input', () => {
            expect(fn([3, 0, 1])).toBe(2);
        });

    });

});

// Specific tests for XOR version (handles large arrays efficiently)
describe('findMissingNumberByXor specific', () => {
    test('works with large numbers', () => {
        expect(findMissingNumberByXor([0, 1, 2, 3, 5, 6, 7, 8])).toBe(4);
    });
});