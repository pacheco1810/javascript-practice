const { factorialCalculator } = require('./factorialCalculator');

test("calculates factorial correctly", () => {
  expect(factorialCalculator(5)).toBe(120);
  expect(factorialCalculator(7)).toBe(5040);
});

test("handles zero", () => {
  expect(factorialCalculator(0)).toBe(1);
});

test("handles negative numbers", () => {
  expect(factorialCalculator(-5)).toBe(0);
});

test("handles invalid input", () => {
  expect(factorialCalculator(null)).toBe(0);
  expect(factorialCalculator(undefined)).toBe(0);
  expect(factorialCalculator("5")).toBe(0);
});