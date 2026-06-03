const { extractHashtags } = require('./extractHashtags');

describe('extractHashtags', () => {
  test('extracts hashtags from text', () => {
    const text = "Aprendiendo #JavaScript y #Regex con #FCC";
    expect(extractHashtags(text)).toEqual(["#JavaScript", "#Regex", "#FCC"]);
  });

  test('returns null when no hashtags found', () => {
    expect(extractHashtags("No hashtags here")).toBeNull();
  });

  test('handles hashtags with numbers', () => {
    const text = "#JS2024 is great";
    expect(extractHashtags(text)).toEqual(["#JS2024"]);
  });

  test('handles hashtags with underscores', () => {
    const text = "#hello_world is cool";
    expect(extractHashtags(text)).toEqual(["#hello_world"]);
  });
});