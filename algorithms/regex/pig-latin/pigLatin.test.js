const { translatePigLatin } = require('./pigLatin');

describe('translatePigLatin', () => {
  test('converts "algorithm" to "algorithmway"', () => {
    expect(translatePigLatin("algorithm")).toBe("algorithmway");
  });

  test('converts "california" to "aliforniacay"', () => {
    expect(translatePigLatin("california")).toBe("aliforniacay");
  });

  test('converts "glove" to "oveglay"', () => {
    expect(translatePigLatin("glove")).toBe("oveglay");
  });

  test('converts "eight" to "eightway"', () => {
    expect(translatePigLatin("eight")).toBe("eightway");
  });

  test('converts "rhythm" to "rhythmay" (no vowels)', () => {
    expect(translatePigLatin("rhythm")).toBe("rhythmay");
  });

  test('converts "schwartz" to "artzschway"', () => {
    expect(translatePigLatin("schwartz")).toBe("artzschway");
  });
});