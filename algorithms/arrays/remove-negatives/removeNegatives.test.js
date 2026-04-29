const { removeNegativesByFor, removeNegativesByFilter, removeNegativesByReduce } = require('./removeNegatives');

const solutions = [
    { name: 'removeNegativesByFor', fn: removeNegativesByFor },
    { name: 'removeNegativesByFilter', fn: removeNegativesByFilter },
    { name: 'removeNegativesByReduce', fn: removeNegativesByReduce }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('removes negatives from [1, -2, 3, -4, 5]', () => {
            if (name === 'removeNegativesByFor') {
                const input = [1, -2, 3, -4, 5];
                expect(fn(input)).toEqual([1, 3, 5]);
            } else {
                expect(fn([1, -2, 3, -4, 5])).toEqual([1, 3, 5]);
            }
        });

        test('handles array with no negatives', () => {
            const input = [1, 2, 3, 4, 5];
            if (name === 'removeNegativesByFor') {
                const copy = [...input];
                expect(fn(copy)).toEqual([1, 2, 3, 4, 5]);
            } else {
                expect(fn([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
            }
        });

        test('handles array with all negatives', () => {
            const input = [-1, -2, -3];
            if (name === 'removeNegativesByFor') {
                const copy = [...input];
                expect(fn(copy)).toEqual([]);
            } else {
                expect(fn([-1, -2, -3])).toEqual([]);
            }
        });

        test('handles empty array', () => {
            const input = [];
            if (name === 'removeNegativesByFor') {
                expect(fn(input)).toEqual([]);
            } else {
                expect(fn([])).toEqual([]);
            }
        });

        test('handles array with zeros', () => {
            const input = [0, -1, 0, -2];
            if (name === 'removeNegativesByFor') {
                const copy = [...input];
                expect(fn(copy)).toEqual([0, 0]);
            } else {
                expect(fn([0, -1, 0, -2])).toEqual([0, 0]);
            }
        });

    });

});