const { repeatStringNumTimes } = require('./repeatString');

test("repeats string correctly", () => {
  expect(repeatStringNumTimes("abc", 3)).toBe("abcabcabc");
  expect(repeatStringNumTimes("a", 5)).toBe("aaaaa");
});

test("handles zero and negative numbers", () => {
  expect(repeatStringNumTimes("abc", 0)).toBe("");
  expect(repeatStringNumTimes("abc", -2)).toBe("");
});

test("handles empty string", () => {
  expect(repeatStringNumTimes("", 5)).toBe("");
});

test("handles invalid input", () => {
  expect(repeatStringNumTimes(null, 3)).toBe("");
  expect(repeatStringNumTimes("abc", "3")).toBe("");
});