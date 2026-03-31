// Input: sortByYear and filter applied to books array
// Output: Books released before 2010, sorted by year

const books = [
  {
    title: "Clean Code",
    authorName: "Robert C. Martin",
    releaseYear: 2008
  },
  {
    title: "The Pragmatic Programmer",
    authorName: "Andrew Hunt",
    releaseYear: 1999
  },
  {
    title: "JavaScript: The Good Parts",
    authorName: "Douglas Crockford",
    releaseYear: 2008
  },
  {
    title: "You Don't Know JS",
    authorName: "Kyle Simpson",
    releaseYear: 2015
  }
];

function sortByYear(book1, book2){
  if(book1.releaseYear < book2.releaseYear) return -1;
  if(book1.releaseYear === book2.releaseYear) return 0;
  return 1;
}

function getBooksBefore2010(){
  let filteredBooks = books.filter(book => book.releaseYear < 2010);
  filteredBooks = filteredBooks.sort(sortByYear);
  return filteredBooks;
}

module.exports = {
  books,
  sortByYear,
  getBooksBefore2010
};