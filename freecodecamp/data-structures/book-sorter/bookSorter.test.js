const { books, sortByYear, getBooksBefore2010 } = require('./bookSorter');

describe('Book Sorter', () => {

  test('sortByYear sorts books by release year ascending', () => {
    const unsorted = [...books];
    const sorted = unsorted.sort(sortByYear);
    
    expect(sorted[0].releaseYear).toBe(1999);
    expect(sorted[1].releaseYear).toBe(2008);
    expect(sorted[2].releaseYear).toBe(2008);
    expect(sorted[3].releaseYear).toBe(2015);
  });

  test('getBooksBefore2010 returns books released before 2010', () => {
    const result = getBooksBefore2010();
    
    expect(result.length).toBe(3);
    expect(result[0].title).toBe("The Pragmatic Programmer");
    expect(result[1].title).toBe("Clean Code");
    expect(result[2].title).toBe("JavaScript: The Good Parts");
  });

  test('getBooksBefore2010 returns books sorted by year', () => {
    const result = getBooksBefore2010();
    
    expect(result[0].releaseYear).toBe(1999);
    expect(result[1].releaseYear).toBe(2008);
    expect(result[2].releaseYear).toBe(2008);
  });

  test('books array remains unchanged', () => {
    const originalLength = books.length;
    getBooksBefore2010();
    
    expect(books.length).toBe(originalLength);
    expect(books).toContainEqual({
      title: "You Don't Know JS",
      authorName: "Kyle Simpson",
      releaseYear: 2015
    });
  });

});