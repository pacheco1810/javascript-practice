const { 
    moveZeros, 
    moveZerosToEndNewArray, 
    moveZerosToEndTwoPointers 
} = require('./moveZeros');

const solutions = [
    { name: 'moveZeros', fn: moveZeros },
    { name: 'moveZerosToEndNewArray', fn: moveZerosToEndNewArray },
    { name: 'moveZerosToEndTwoPointers', fn: moveZerosToEndTwoPointers }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('moves zeros in [0,1,0,3,12] correctly', () => {
            if (name === 'moveZerosToEndNewArray') {
                expect(fn([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
            } else {
                const input = [0, 1, 0, 3, 12];
                expect(fn(input)).toEqual([1, 3, 12, 0, 0]);
            }
        });

        test('handles array with no zeros', () => {
            const input = [1, 2, 3, 4];
            if (name === 'moveZerosToEndNewArray') {
                expect(fn([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
            } else {
                expect(fn([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
            }
        });

        test('handles array with all zeros', () => {
            const input = [0, 0, 0, 0];
            if (name === 'moveZerosToEndNewArray') {
                expect(fn([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
            } else {
                expect(fn([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
            }
        });

        test('handles empty array', () => {
            if (name === 'moveZerosToEndNewArray') {
                expect(fn([])).toEqual([]);
            } else {
                expect(fn([])).toEqual([]);
            }
        });

        test('handles zeros at the end', () => {
            const input = [1, 2, 0, 0, 3];
            if (name === 'moveZerosToEndNewArray') {
                expect(fn([1, 2, 0, 0, 3])).toEqual([1, 2, 3, 0, 0]);
            } else {
                expect(fn([1, 2, 0, 0, 3])).toEqual([1, 2, 3, 0, 0]);
            }
        });

        test('handles negative numbers', () => {
            const input = [-1, 0, -2, 0, 3];
            if (name === 'moveZerosToEndNewArray') {
                expect(fn([-1, 0, -2, 0, 3])).toEqual([-1, -2, 3, 0, 0]);
            } else {
                expect(fn([-1, 0, -2, 0, 3])).toEqual([-1, -2, 3, 0, 0]);
            }
        });

    });

});

// Tests específicos para moveZerosToEndNewArray (no modifica original)
describe('moveZerosToEndNewArray specific', () => {
    test('does not modify original array', () => {
        const original = [0, 1, 0, 3, 12];
        const copy = [...original];
        moveZerosToEndNewArray(original);
        expect(original).toEqual(copy);
    });
});

// Tests específicos para moveZerosToEndTwoPointers (in-place con swap)
describe('moveZerosToEndTwoPointers specific', () => {
    test('uses swap and moves zeros correctly', () => {
        const input = [0, 1, 0, 3, 12];
        expect(moveZerosToEndTwoPointers(input)).toEqual([1, 3, 12, 0, 0]);
    });

    test('handles array with no zeros', () => {
        const input = [1, 2, 3];
        expect(moveZerosToEndTwoPointers(input)).toEqual([1, 2, 3]);
    });
});