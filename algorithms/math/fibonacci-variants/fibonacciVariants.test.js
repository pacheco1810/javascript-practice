const { 
    fibonacciSequence,
    fibonacciSequenceSumNumber,
    fibonacciEvenSequence,
    fibonacciEvenSequenceSumNumber,
    fibonacciOddSequence,
    fibonacciOddSequenceSumNumber
} = require('./fibonacciVariants');

describe('fibonacciSequence', () => {
    test('generates first 10 Fibonacci numbers', () => {
        expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test('generates first 5 Fibonacci numbers', () => {
        expect(fibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
    });

    test('generates first 1 Fibonacci number', () => {
        expect(fibonacciSequence(1)).toEqual([0]);
    });

    test('generates first 2 Fibonacci numbers', () => {
        expect(fibonacciSequence(2)).toEqual([0, 1]);
    });
});

describe('fibonacciSequenceSumNumber', () => {
    test('sums Fibonacci numbers less than 10', () => {
        expect(fibonacciSequenceSumNumber(10)).toBe(20);
    });

    test('sums Fibonacci numbers less than 1', () => {
        expect(fibonacciSequenceSumNumber(1)).toBe(0);
    });

    test('sums Fibonacci numbers less than 100', () => {
        expect(fibonacciSequenceSumNumber(100)).toBe(232);
    });
});

describe('fibonacciEvenSequence', () => {
    test('generates first 10 even Fibonacci numbers', () => {
        expect(fibonacciEvenSequence(10)).toEqual([0, 2, 8, 34, 144, 610, 2584, 10946, 46368, 196418]);
    });

    test('generates first 3 even Fibonacci numbers', () => {
        expect(fibonacciEvenSequence(3)).toEqual([0, 2, 8]);
    });
});

describe('fibonacciEvenSequenceSumNumber', () => {
    test('sums even Fibonacci numbers less than 10', () => {
        expect(fibonacciEvenSequenceSumNumber(10)).toBe(10);
    });

    test('sums even Fibonacci numbers less than 100', () => {
        expect(fibonacciEvenSequenceSumNumber(100)).toBe(44);
    });
});

describe('fibonacciOddSequence', () => {
    test('generates first 10 odd Fibonacci numbers', () => {
        expect(fibonacciOddSequence(10)).toEqual([1, 1, 3, 5, 13, 21, 55, 89, 233, 377]);
    });

    test('generates first 3 odd Fibonacci numbers', () => {
        expect(fibonacciOddSequence(3)).toEqual([1, 1, 3]);
    });
});

describe('fibonacciOddSequenceSumNumber', () => {
    test('sums odd Fibonacci numbers less than 10', () => {
        expect(fibonacciOddSequenceSumNumber(10)).toBe(10);
    });

    test('sums odd Fibonacci numbers less than 100', () => {
        expect(fibonacciOddSequenceSumNumber(100)).toBe(188);
    });
});