const {
  firstNonRepeatingClassic,
  firstNonRepeatingFrequency,
  firstNonRepeatingMethods
} = require('./first-non-repeating-char');

const solutions = [
  firstNonRepeatingClassic,
  firstNonRepeatingFrequency,
  firstNonRepeatingMethods
];

solutions.forEach(fn => {
  test(`${fn.name} returns first non repeating character`, () => {
    expect(fn("swiss")).toBe("The first letter not repeating is: w");
    expect(fn("aabbcc")).toBe(null);
    expect(fn("a")).toBe("The first letter not repeating is: a");
    expect(fn("abc")).toBe("The first letter not repeating is: a");
  });
});