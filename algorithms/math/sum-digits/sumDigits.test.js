const { 
    sumDigitsByFor, 
    sumDigitsByWhile, 
    sumDigitsByForEach, 
    sumDigitsByReduce 
} = require('./sumDigits');

const solutions = [
    { name: 'sumDigitsByFor', fn: sumDigitsByFor },
    { name: 'sumDigitsByWhile', fn: sumDigitsByWhile },
    { name: 'sumDigitsByForEach', fn: sumDigitsByForEach },
    { name: 'sumDigitsByReduce', fn: sumDigitsByReduce }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('sums digits of "2222"', () => {
            if (name === 'sumDigitsByWhile') {
                expect(fn(2222)).toBe(8);
            } else {
                expect(fn("2222")).toBe(8);
            }
        });

        test('sums digits of "12345"', () => {
            if (name === 'sumDigitsByWhile') {
                expect(fn(12345)).toBe(15);
            } else {
                expect(fn("12345")).toBe(15);
            }
        });

        test('sums digits of "0"', () => {
            if (name === 'sumDigitsByWhile') {
                expect(fn(0)).toBe(0);
            } else {
                expect(fn("0")).toBe(0);
            }
        });

        test('sums digits of "999"', () => {
            if (name === 'sumDigitsByWhile') {
                expect(fn(999)).toBe(27);
            } else {
                expect(fn("999")).toBe(27);
            }
        });

        test('sums digits of single digit', () => {
            if (name === 'sumDigitsByWhile') {
                expect(fn(5)).toBe(5);
            } else {
                expect(fn("5")).toBe(5);
            }
        });

    });

});

// Tests específicos para sumDigitsByWhile con números
describe('sumDigitsByWhile specific', () => {
    test('handles number with trailing zeros', () => {
        expect(sumDigitsByWhile(1000)).toBe(1);
    });

    test('handles two-digit number', () => {
        expect(sumDigitsByWhile(47)).toBe(11);
    });
});