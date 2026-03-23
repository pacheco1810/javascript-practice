const { findElement } = require('./findElement');

test('findElement returns first element that passes test', () => {
  expect(findElement([1, 3, 5, 9, 10], num => num % 2 === 0)).toBe(10);
  expect(findElement([1, 3, 5], num => num % 2 === 0)).toBe(undefined);
  expect(findElement([], num => num > 0)).toBe(undefined);
});