const { getMostFrequentChar, getLeastFrequentChar } = require('./charFrequency');

describe('getMostFrequentChar', () => {
  test('returns "l" for "hello world"', () => {
    expect(getMostFrequentChar("hello world")).toBe("l");
  });

  test('returns array of all chars when all appear once', () => {
    const result = getMostFrequentChar("abcde");
    expect(result).toEqual(["a", "b", "c", "d", "e"]);
  });

  test('ignores non-letter characters', () => {
    expect(getMostFrequentChar("hello, world!")).toBe("l");
  });

  test('handles empty string', () => {
    expect(() => getMostFrequentChar("")).toThrow();
  });

  test('handles case sensitivity', () => {
    expect(getMostFrequentChar("Hello World")).toBe("l");
  });

  test('returns correct char for "abca"', () => {
    expect(getMostFrequentChar("abca")).toBe("a");
  });

  test('returns array for tie', () => {
    const result = getMostFrequentChar("aabb");
    expect(result).toEqual(["a", "b"]);
  });
});

describe('getLeastFrequentChar', () => {
  test('returns ["h","e","o","w","r","d"] for "hello world"', () => {
    const result = getLeastFrequentChar("hello world");
    expect(result).toEqual(["h", "e", "o", "w", "r", "d"]);
  });

  test('ignores non-letter characters', () => {
    const result = getLeastFrequentChar("hello, world!");
    expect(result).toEqual(["h", "e", "o", "w", "r", "d"]);
  });

  test('handles case sensitivity', () => {
    const result = getLeastFrequentChar("Hello World");
    expect(result).toEqual(["H", "e", "o", "W", "r", "d"]);
  });

  test('returns single char when one is least frequent', () => {
    const result = getLeastFrequentChar("aaabbc");
    expect(result).toEqual(["c"]);
  });

  test('handles empty string', () => {
    const result = getLeastFrequentChar("");
    expect(result).toEqual([]);
  });

  test('returns all chars when frequencies are equal', () => {
    const result = getLeastFrequentChar("abc");
    expect(result).toEqual(["a", "b", "c"]);
  });
});