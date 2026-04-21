const { calculateSimple } = require('./calculateSimple');

describe('calculateSimple', () => {

    test('calculates "7-2+4" correctly', () => {
        expect(calculateSimple("7-2+4")).toBe(9);
    });

    test('calculates "1+2+3" correctly', () => {
        expect(calculateSimple("1+2+3")).toBe(6);
    });

    test('calculates "10-5+3" correctly', () => {
        expect(calculateSimple("10-5+3")).toBe(8);
    });

    test('calculates "0-5" correctly', () => {
        expect(calculateSimple("0-5")).toBe(-5);
    });

    test('calculates "100" correctly', () => {
        expect(calculateSimple("100")).toBe(100);
    });

    test('calculates "-5+10" correctly', () => {
        expect(calculateSimple("-5+10")).toBe(5);
    });

    test('calculates "5-10" correctly', () => {
        expect(calculateSimple("5-10")).toBe(-5);
    });

    test('calculates "0" correctly', () => {
        expect(calculateSimple("0")).toBe(0);
    });

});