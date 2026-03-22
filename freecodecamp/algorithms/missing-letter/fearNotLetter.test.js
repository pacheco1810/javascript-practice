const { fearNotLetter } = require('./fearNotLetter');

test("finds missing letter in sequence", () => {
  expect(fearNotLetter("abce")).toBe("d");
  expect(fearNotLetter("abcdefghjklmno")).toBe("i");
});

test("returns undefined when no letter is missing", () => {
  expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toBeUndefined();
});

test("handles short sequences", () => {
  expect(fearNotLetter("ab")).toBeUndefined();
});

test("handles invalid input", () => {
  expect(fearNotLetter(null)).toBeUndefined();
  expect(fearNotLetter("")).toBeUndefined();
});