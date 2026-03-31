# Book Sorter

This exercise filters and sorts a collection of books by release year.

---

# Problem

Given an array of book objects with title, authorName, and releaseYear:

* Filter books released before 2010
* Sort the filtered books by release year in ascending order

---

### Example

Input:

books array with 4 books

Output:

[
  {
    title: "The Pragmatic Programmer",
    authorName: "Andrew Hunt",
    releaseYear: 1999
  },
  {
    title: "Clean Code",
    authorName: "Robert C. Martin",
    releaseYear: 2008
  },
  {
    title: "JavaScript: The Good Parts",
    authorName: "Douglas Crockford",
    releaseYear: 2008
  }
]

---

# Folder Structure

book-sorter/
│
├── bookSorter.js
├── bookSorter.test.js
└── README.md

---

# Solutions Implemented

---

## 1. sortByYear

* Custom comparator function for sorting by release year
* Returns -1, 0, or 1 based on year comparison

## 2. getBooksBefore2010

* Uses filter() to get books released before 2010
* Uses sort() with sortByYear comparator
* Returns filtered and sorted array

---

# Concepts Practiced

* Arrays of objects
* Array methods (filter, sort)
* Custom comparator functions
* Data manipulation
* Immutability

---

# Time Complexity

O(n log n)

Where n is the number of books.

---

# Author

Angel Andrei Espiritu Pacheco