const { hasRepeatedWord } = require('./repeatedWord');

describe('hasRepeatedWord', () => {
  test('returns true for "hello hello world"', () => {
    expect(hasRepeatedWord("hello hello world")).toBe(true);
  });

  test('returns false for "I love JS"', () => {
    expect(hasRepeatedWord("I love JS")).toBe(false);
  });

  test('returns true for "yes yes yes"', () => {
    expect(hasRepeatedWord("yes yes yes")).toBe(true);
  });

  test('returns true for "the the"', () => {
    expect(hasRepeatedWord("the the")).toBe(true);
  });

  test('returns false for "hello world hello" (not consecutive)', () => {
    expect(hasRepeatedWord("hello world hello")).toBe(false);
  });
});