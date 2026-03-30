const { calculateFibonacci, addFibonacci, oddFibonacci, evenFibonacci } = require('./sumFibs');

describe('Fibonacci Functions', () => {

    test('addFibonacci sums all Fibonacci numbers up to 10', () => {
        // Fibonacci up to 10: 1, 1, 2, 3, 5, 8
        // Sum: 1 + 1 + 2 + 3 + 5 + 8 = 20
        expect(addFibonacci(10)).toBe(20);
    });

    test('addFibonacci sums all Fibonacci numbers up to 1', () => {
        // Fibonacci up to 1: 1, 1
        // Sum: 1 + 1 = 2
        expect(addFibonacci(1)).toBe(2);
    });

    test('addFibonacci sums all Fibonacci numbers up to 100', () => {
        // Fibonacci up to 100: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
        // Sum: 1+1+2+3+5+8+13+21+34+55+89 = 232
        expect(addFibonacci(100)).toBe(232);
    });

    test('oddFibonacci sums odd Fibonacci numbers up to 10', () => {
        // Odd Fibonacci up to 10: 1, 1, 3, 5
        // Sum: 1 + 1 + 3 + 5 = 10
        expect(oddFibonacci(10)).toBe(10);
    });

    test('oddFibonacci sums odd Fibonacci numbers up to 1000', () => {
        // Known result from freeCodeCamp
        expect(oddFibonacci(1000)).toBe(1785);
    });

    test('evenFibonacci sums even Fibonacci numbers up to 10', () => {
        // Even Fibonacci up to 10: 2, 8
        // Sum: 2 + 8 = 10
        expect(evenFibonacci(10)).toBe(10);
    });

    test('evenFibonacci sums even Fibonacci numbers up to 100', () => {
        // Even Fibonacci up to 100: 2, 8, 34
        // Sum: 2 + 8 + 34 = 44
        expect(evenFibonacci(100)).toBe(44);
    });

    test('evenFibonacci sums even Fibonacci numbers up to 1000', () => {
        // Even Fibonacci up to 1000: 2, 8, 34, 144, 610
        // Sum: 2 + 8 + 34 + 144 + 610 = 798
        expect(evenFibonacci(1000)).toBe(798);
    });

    test('calculateFibonacci with "add" option', () => {
        expect(calculateFibonacci(10, "add")).toBe(20);
    });

    test('calculateFibonacci with "odd" option', () => {
        expect(calculateFibonacci(10, "odd")).toBe(10);
    });

    test('calculateFibonacci with "even" option', () => {
        expect(calculateFibonacci(10, "even")).toBe(10);
    });

    test('calculateFibonacci with invalid option', () => {
        expect(calculateFibonacci(10, "invalid")).toBe('The option invalid is incorrect. Please select "add"-"odd"-"even"');
    });

});