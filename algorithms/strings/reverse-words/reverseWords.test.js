const {
  reverseWordsClassic,
  reverseWordsLoop,
  reverseWordsFunctional
} = require('./reverseWords');

const solutions = [
  reverseWordsClassic,
  reverseWordsLoop,
  reverseWordsFunctional
];

solutions.forEach(fn => {
  test(`${fn.name} returns first non repeating character`, () => {
    expect(fn("hello world")).toBe("olleh dlrow");
    expect(fn("javascript is fun")).toBe("tpircsavaj si nuf");
    expect(fn("abc")).toBe("cba");
  });
});