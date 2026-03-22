const { largestOfAll } = require('./largestOfAll');

test("returns largest numbers from each sub-array", () => {
  expect(
    largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26]])
  ).toEqual([5, 27]);
});

test("handles multiple arrays", () => {
  expect(
    largestOfAll([[1, 2], [3, 4], [5, 6]])
  ).toEqual([2, 4, 6]);
});

test("handles negative numbers", () => {
  expect(
    largestOfAll([[-10, -5], [-3, -1]])
  ).toEqual([-5, -1]);
});

test("handles invalid input", () => {
  expect(largestOfAll(null)).toEqual([]);
});