const { frankenSplice } = require('./frankenSplice');

test('frankenSplice inserts elements correctly', () => {
  expect(frankenSplice([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
  expect(frankenSplice([1, 2], [], 0)).toEqual([1, 2]);
  expect(frankenSplice([], [1, 2, 3], 2)).toEqual([1, 2, 3]);
});