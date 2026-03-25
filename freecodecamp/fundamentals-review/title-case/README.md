# Title Case

This exercise converts a string to title case where the first letter of each word is capitalized and the rest are lowercase.

---

# Problem

Given a string containing multiple words, return the same string converted to title case:

* First letter of each word is uppercase
* Remaining letters of each word are lowercase

---

### Example

Input:

"sHoRt AnD sToUt"

Output:

"Short And Stout"

---

# Folder Structure

title-case/
│
├── titleCase.js
├── titleCase.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Title Case with Map

* Converts entire string to lowercase
* Splits string into an array of words
* Uses map to capitalize first letter of each word
* Joins array back into a string

Purpose:
Practice string manipulation, array methods, and functional programming.

---

# Concepts Practiced

* String methods (toLowerCase, charAt, slice)
* Array methods (split, map, join)
* Chaining methods
* Arrow functions

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Author

Angel Andrei Espiritu Pacheco