const { oddFibonacci, evenFibonacci } = require('./fibonacciSum');

describe('Fibonacci Sum Functions', () => {

    test('oddFibonacci sums odd Fibonacci numbers up to 1000', () => {
        expect(oddFibonacci(1000)).toBe(1785);
    });

    test('oddFibonacci sums odd Fibonacci numbers up to 1', () => {
        expect(oddFibonacci(1)).toBe(1);
    });

    test('oddFibonacci sums odd Fibonacci numbers up to 2', () => {
        expect(oddFibonacci(2)).toBe(2);
    });

    test('oddFibonacci sums odd Fibonacci numbers up to 10', () => {
        expect(oddFibonacci(10)).toBe(10);
    });

    test('oddFibonacci sums odd Fibonacci numbers up to 4000000', () => {
        expect(oddFibonacci(4000000)).toBe(4613732);
    });

    test('oddFibonacci handles zero', () => {
        expect(oddFibonacci(0)).toBe(0);
    });

    test('evenFibonacci sums even Fibonacci numbers up to 1000', () => {
        expect(evenFibonacci(1000)).toBe(798);
    });

    test('evenFibonacci sums even Fibonacci numbers up to 10', () => {
        expect(evenFibonacci(10)).toBe(10);
    });

    test('evenFibonacci sums even Fibonacci numbers up to 100', () => {
        expect(evenFibonacci(100)).toBe(44);
    });

    test('evenFibonacci sums even Fibonacci numbers up to 4000000', () => {
        expect(evenFibonacci(4000000)).toBe(4613732);
    });

    test('evenFibonacci handles zero', () => {
        expect(evenFibonacci(0)).toBe(0);
    });

});