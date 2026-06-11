# Search and Replace

This exercise performs a search and replace on a string while preserving the case of the original word.

---

# Problem

Create a function that performs a search and replace on a string using the following rules:

* Find the target word in the string
* Replace it with the new word
* Preserve the case of the original word:
  - If the original word starts with uppercase, the replacement should also start with uppercase
  - If the original word starts with lowercase, the replacement should also start with lowercase

---

### Example

Input:

myReplace("Let us go to the store", "store", "mall")

Output:

"Let us go to the mall"

Input:

myReplace("His name is Book", "Book", "dog")

Output:

"His name is Dog"

---

# Folder Structure

search-replace/
│
├── searchReplace.js
├── searchReplace.test.js
└── README.md

---

# Solutions Implemented

---

## 1. myReplace

* Checks if the first character of the target word is uppercase using regex
* Adjusts the replacement word's case accordingly
* Uses RegExp constructor to create dynamic regex for global replacement
* Replaces all occurrences of the target word

---

# Regex Pattern

/[A-Z]/

| Component | Description |
|-----------|-------------|
| [A-Z] | Matches any uppercase letter |

---

# Concepts Practiced

* Regular expressions
* Dynamic regex with RegExp constructor
* String methods (charAt, toUpperCase, toLowerCase, slice)
* Case preservation
* Conditional (ternary) operator

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Author

Angel Andrei Espiritu Pacheco