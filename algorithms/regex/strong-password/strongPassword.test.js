const { isStrongPassword } = require('./strongPassword');

describe('isStrongPassword', () => {
  test('returns true for "Hello123"', () => {
    expect(isStrongPassword("Hello123")).toBe(true);
  });

  test('returns false for "hello123" (no uppercase)', () => {
    expect(isStrongPassword("hello123")).toBe(false);
  });

  test('returns false for "HELLO123" (no lowercase)', () => {
    expect(isStrongPassword("HELLO123")).toBe(false);
  });

  test('returns false for "Hello" (no numbers, too short)', () => {
    expect(isStrongPassword("Hello")).toBe(false);
  });

  test('returns true for "Password123"', () => {
    expect(isStrongPassword("Password123")).toBe(true);
  });

  test('returns false for "Pass123" (too short)', () => {
    expect(isStrongPassword("Pass123")).toBe(false);
  });
});