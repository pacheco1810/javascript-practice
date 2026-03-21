const { mutation } = require('./mutationChecker');

test("returns true when all letters are present", () => {
  expect(mutation(["hello", "Hello"])).toBe(true);
  expect(mutation(["Mary", "Army"])).toBe(true);
});

test("returns false when letters are missing", () => {
  expect(mutation(["hello", "hey"])).toBe(false);
  expect(mutation(["Alien", "linea"])).toBe(true);
});

test("handles edge cases", () => {
  expect(mutation(["", "a"])).toBe(false);
  expect(mutation(["abc", ""])).toBe(true);
});

test("handles invalid input", () => {
  expect(mutation(null)).toBe(false);
  expect(mutation(["hello"])).toBe(false);
});