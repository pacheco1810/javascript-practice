# Unite Unique

This exercise combines multiple arrays into one array with only unique values, preserving the order of first occurrence.

---

# Problem

Given multiple arrays, return a new array that contains all values from the arrays combined, with duplicates removed.

* Values should appear in the order they first appear across all arrays
* Each value should appear only once in the final array

---

### Example

Input:

uniteUnique([1, 2, 3], [5, 2, 1])

Output:

[1, 2, 3, 5]

---

# Folder Structure

unite-unique/
│
├── uniteUnique.js
├── uniteUnique.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Unite Unique with Nested Loops

* Uses rest parameter to accept multiple arrays
* Iterates through each array with a for loop
* Uses includes() to check for duplicates
* Pushes unique values to new array

Purpose:
Practice rest parameters, nested loops, and array methods.

---

# Concepts Practiced

* Rest parameters (...restArr)
* Nested loops
* Array methods (includes, push)
* Duplicate removal
* Order preservation

---

# Time Complexity

O(n²)

Where n is the total number of elements across all arrays.

---

# Author

Angel Andrei Espiritu Pacheco