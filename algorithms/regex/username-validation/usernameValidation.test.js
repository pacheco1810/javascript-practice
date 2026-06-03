const { isValidUsername } = require('./usernameValidation');

describe('isValidUsername', () => {
  test('returns true for "Angel_23"', () => {
    expect(isValidUsername("Angel_23")).toBe(true);
  });

  test('returns false for "23Angel" (starts with number)', () => {
    expect(isValidUsername("23Angel")).toBe(false);
  });

  test('returns false for "ab" (too short)', () => {
    expect(isValidUsername("ab")).toBe(false);
  });

  test('returns false for "angel@" (invalid character)', () => {
    expect(isValidUsername("angel@")).toBe(false);
  });

  test('returns false for empty string', () => {
    expect(isValidUsername("")).toBe(false);
  });

  test('returns true for valid username with underscore', () => {
    expect(isValidUsername("John_Doe_123")).toBe(true);
  });
});