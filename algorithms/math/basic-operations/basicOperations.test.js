const { add, rest, mul, div } = require('./basicOperations');

describe('Basic Operations', () => {

    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(add(5, 3)).toBe(8);
        });

        test('adds positive and negative numbers', () => {
            expect(add(5, -3)).toBe(2);
        });

        test('adds two negative numbers', () => {
            expect(add(-5, -3)).toBe(-8);
        });

        test('adds zero', () => {
            expect(add(5, 0)).toBe(5);
        });
    });

    describe('rest', () => {
        test('subtracts two positive numbers', () => {
            expect(rest(5, 3)).toBe(2);
        });

        test('subtracts positive and negative numbers', () => {
            expect(rest(5, -3)).toBe(8);
        });

        test('subtracts two negative numbers', () => {
            expect(rest(-5, -3)).toBe(-2);
        });
    });

    describe('mul', () => {
        test('multiplies two positive numbers', () => {
            expect(mul(5, 3)).toBe(15);
        });

        test('multiplies positive and negative numbers', () => {
            expect(mul(5, -3)).toBe(-15);
        });

        test('multiplies two negative numbers', () => {
            expect(mul(-5, -3)).toBe(15);
        });

        test('multiplies by zero', () => {
            expect(mul(5, 0)).toBe(0);
        });
    });

    describe('div', () => {
        test('divides two positive numbers', () => {
            expect(div(10, 5)).toBe(2);
        });

        test('divides positive and negative numbers', () => {
            expect(div(10, -5)).toBe(-2);
        });

        test('divides two negative numbers', () => {
            expect(div(-10, -5)).toBe(2);
        });

        test('divides zero', () => {
            expect(div(0, 5)).toBe(0);
        });
    });

});