const { myReplace } = require('./searchReplace');

describe('myReplace', () => {
  test('replaces "store" with "mall" in "Let us go to the store"', () => {
    expect(myReplace("Let us go to the store", "store", "mall")).toBe("Let us go to the mall");
  });

  test('preserves uppercase when replacing "Book" with "dog"', () => {
    expect(myReplace("His name is Book", "Book", "dog")).toBe("His name is Dog");
  });

  test('preserves lowercase when replacing "book" with "Dog"', () => {
    expect(myReplace("I like book", "book", "Dog")).toBe("I like dog");
  });

  test('replaces multiple occurrences', () => {
    expect(myReplace("I love love coding", "love", "enjoy")).toBe("I enjoy enjoy coding");
  });

  test('handles word with uppercase first letter', () => {
    expect(myReplace("She sells Shells", "Shells", "Seashells")).toBe("She sells Seashells");
  });
});