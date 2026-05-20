const { 
  isPalindrome, 
  findPalindromeBreaks, 
  findRepeatedPhrases, 
  analyzeTexts 
} = require('./textAnalyzer');

describe('isPalindrome', () => {
  test('returns true for "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test('returns true for "level"', () => {
    expect(isPalindrome("level")).toBe(true);
  });

  test('returns false for "hello"', () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test('is case insensitive', () => {
    expect(isPalindrome("RaceCar")).toBe(true);
    expect(isPalindrome("LEVEL")).toBe(true);
  });
});

describe('findPalindromeBreaks', () => {
  test('returns indices of non-palindromes', () => {
    const words = ["racecar", "level", "hello"];
    expect(findPalindromeBreaks(words)).toEqual([2]);
  });

  test('returns empty array when all are palindromes', () => {
    const words = ["racecar", "level", "radar"];
    expect(findPalindromeBreaks(words)).toEqual([]);
  });

  test('returns empty array for empty input', () => {
    expect(findPalindromeBreaks([])).toEqual([]);
  });

  test('returns indices for multiple non-palindromes', () => {
    const words = ["hello", "racecar", "world", "level"];
    expect(findPalindromeBreaks(words)).toEqual([0, 2]);
  });

  test('returns all indices when no palindromes', () => {
    const words = ["i", "love", "js", "i", "love", "js"];
    expect(findPalindromeBreaks(words)).toEqual([ 1, 2,  4, 5]);
  });
});

describe('findRepeatedPhrases', () => {
  test('finds repeated phrases of length 2', () => {
    const words = ["i", "love", "js", "i", "love", "js"];
    expect(findRepeatedPhrases(words, 2)).toEqual([0, 1, 3, 4]);
  });

  test('finds repeated phrases of length 3', () => {
    const words = ["i", "love", "js", "i", "love", "js"];
    expect(findRepeatedPhrases(words, 3)).toEqual([0, 3]);
  });

  test('returns empty array when phraseLength >= words length', () => {
    const words = ["a", "b", "c"];
    expect(findRepeatedPhrases(words, 3)).toEqual([]);
    expect(findRepeatedPhrases(words, 4)).toEqual([]);
  });

  test('returns empty array when no repeated phrases', () => {
    const words = ["a", "b", "c", "d", "e"];
    expect(findRepeatedPhrases(words, 2)).toEqual([]);
  });

  test('handles overlapping phrases correctly', () => {
    const words = ["a", "a", "a", "a"];
    expect(findRepeatedPhrases(words, 2)).toEqual([0, 1, 2]);
  });

  test('handles "the cat sat the cat" example', () => {
    const words = ["the", "cat", "sat", "the", "cat"];
    expect(findRepeatedPhrases(words, 2)).toEqual([0, 3]);
  });
});

describe('analyzeTexts', () => {
  test('analyzes multiple texts correctly', () => {
    const texts = [
      ["i", "love", "js", "i", "love", "js"],
      ["racecar", "level", "hello"]
    ];
    const result = analyzeTexts(texts, 3);
    
    expect(result).toEqual([
      { repeatedPhrases: [0, 3], palindromeBreaks: [1, 2, 4, 5] },
      { repeatedPhrases: [], palindromeBreaks: [2] }
    ]);
  });

  test('returns empty array for empty texts', () => {
    expect(analyzeTexts([], 2)).toEqual([]);
  });

  test('handles single text with mixed content', () => {
    const texts = [["a", "b", "a", "b"]];
    const result = analyzeTexts(texts, 2);
    
    expect(result).toEqual([
      { repeatedPhrases: [0, 2], palindromeBreaks: [] }
    ]);
  });
});