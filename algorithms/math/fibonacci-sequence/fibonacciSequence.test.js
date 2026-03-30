const { Fibonacci } = require('./fibonacciSequence');

const solutions = [
    Fibonacci
];

solutions.forEach(fn => {

    test(`${fn.name} generates Fibonacci sequence without zero`, () => {
        expect(fn(10, false)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });

    test(`${fn.name} generates Fibonacci sequence with zero`, () => {
        expect(fn(10, true)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test(`${fn.name} handles count of 1 without zero`, () => {
        expect(fn(1, false)).toEqual([1]);
    });

    test(`${fn.name} handles count of 1 with zero`, () => {
        expect(fn(1, true)).toEqual([0]);
    });

    test(`${fn.name} handles count of 2 without zero`, () => {
        expect(fn(2, false)).toEqual([1, 1]);
    });

    test(`${fn.name} handles count of 2 with zero`, () => {
        expect(fn(2, true)).toEqual([0, 1]);
    });

    test(`${fn.name} handles count of 0`, () => {
        expect(fn(0, false)).toEqual([]);
        expect(fn(0, true)).toEqual([]);
    });

    test(`${fn.name} handles negative count`, () => {
        expect(fn(-5, false)).toEqual([]);
        expect(fn(-5, true)).toEqual([]);
    });

});