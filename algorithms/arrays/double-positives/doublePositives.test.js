const { 
    doublePositivesByFor, 
    doublePositivesByFilter, 
    doublePositivesByForEach, 
    doublePositivesByReduce 
} = require('./doublePositives');

const solutions = [
    { name: 'doublePositivesByFor', fn: doublePositivesByFor },
    { name: 'doublePositivesByFilter', fn: doublePositivesByFilter },
    { name: 'doublePositivesByForEach', fn: doublePositivesByForEach },
    { name: 'doublePositivesByReduce', fn: doublePositivesByReduce }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('doubles positive numbers from [1, -2, 3, -4, 5]', () => {
            expect(fn([1, -2, 3, -4, 5])).toEqual([2, 6, 10]);
        });

        test('handles array with no positive numbers', () => {
            expect(fn([-1, -2, -3])).toEqual([]);
        });

        test('handles array with all positive numbers', () => {
            expect(fn([1, 2, 3])).toEqual([2, 4, 6]);
        });

        test('handles zeros', () => {
            expect(fn([0, -1, 0, -2])).toEqual([0, 0]);
        });

        test('handles empty array', () => {
            expect(fn([])).toEqual([]);
        });

        test('handles array with mixed numbers', () => {
            expect(fn([-5, 4, -3, 2, -1, 0])).toEqual([8, 4, 0]);
        });

    });

});