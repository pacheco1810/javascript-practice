# Word Length Statistics

This exercise analyzes word length statistics in a string.

---

# Problem

Given a string of words, create functions that:

* Count how many words have each length
* Group words by their length
* Find the most common word length
* Find the longest word(s)

---

### Example

Input:

"Hello world this is a code test"

Output (getLongestWord):
["Hello", "world"]

---

# Folder Structure

word-length-stats/
│
├── wordLengthStats.js
├── wordLengthStats.test.js
└── README.md

---

# Solutions Implemented

---

## 1. countWordsByLength

* Uses regex `/\s+/` to split by spaces
* Uses reduce() to count word lengths

## 2. groupWordsByLength

* Groups words into arrays by their length

## 3. getMostCommonLength

* Finds the length that appears most frequently

## 4. getLongestWord

* Finds the longest word(s) in the string
* Returns array to handle ties

---

# Concepts Practiced

* String methods (trim, split)
* Regular expressions (/\s+/)
* Array reduce() method
* Object manipulation
* Frequency counting

---

# Time Complexity

O(n)

Where n is the number of words.

---

# Author

Angel Andrei Espiritu Pacheco