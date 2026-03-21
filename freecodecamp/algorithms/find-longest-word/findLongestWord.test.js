const { findLongestWordLength } = require('./findLongestWord');

test("returns the length of the longest word", () => {
  expect(findLongestWordLength("May the force be with you")).toBe(5);
  expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
  expect(findLongestWordLength("hello world")).toBe(5);
});

test("handles extra spaces", () => {
  expect(findLongestWordLength("hello   world")).toBe(5);
});

test("handles single word", () => {
  expect(findLongestWordLength("javascript")).toBe(10);
});

test("handles empty string", () => {
  expect(findLongestWordLength("")).toBe(0);
});

test("handles invalid input", () => {
  expect(findLongestWordLength(null)).toBe(0);
  expect(findLongestWordLength(undefined)).toBe(0);
  expect(findLongestWordLength(123)).toBe(0);
});