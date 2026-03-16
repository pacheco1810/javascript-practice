const {
    palindromeClassic,
    palindromeLoop,
    palindromeTwoPointers
} = require('./palindromeCheck');

const solutions = [
    palindromeClassic,
    palindromeLoop,
    palindromeTwoPointers
];

solutions.forEach(fn => {

    test(`${fn.name} returns true for a valid palindrome`, () => {
        expect(fn("racecar")).toBe(true);
    });

    test(`${fn.name} returns false for a non-palindrome`, () => {
        expect(fn("hello")).toBe(false);
    });

    test(`${fn.name} works with a single character`, () => {
        expect(fn("a")).toBe(true);
    });

    test(`${fn.name} works with mixed case`, () => {
        expect(fn("RaceCar")).toBe(true);
    });

    test(`${fn.name} works with empty string`, () => {
        expect(fn("")).toBe(true);
    });

});