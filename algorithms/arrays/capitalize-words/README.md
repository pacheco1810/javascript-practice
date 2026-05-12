# Capitalize Words

This exercise capitalizes the first letter of each word in an array using different approaches.

---

# Problem

Given an array of words, return a new array where the first letter of each valid word is capitalized.

* The rest of the word should be in lowercase (preserved from original)
* Non-string elements should be ignored
* Empty strings or strings with only spaces should be ignored
* If no valid words remain, return an empty array

---

### Example

Input:

capitalizeWordsByFor(["apple", "banana", "orange"])

Output:

["Apple", "Banana", "Orange"]

---

# Folder Structure

capitalize-words/
│
├── capitalizeWords.js
├── capitalizeWords.test.js
└── README.md

---

# Solutions Implemented

---

## 1. capitalizeWordsByFor

* Uses for...of loop to iterate
* Validates each element (string, not empty)
* Capitalizes first letter and slices the rest

## 2. capitalizeWordsByFilterAndMap

* Filters out invalid elements
* Maps to capitalize each word
* Most functional approach

## 3. capitalizeWordsByReduce

* Uses reduce to accumulate results
* Pushes capitalized words to accumulator

---

# Concepts Practiced

* Array iteration (for...of)
* Array methods (filter, map, reduce)
* String methods (toUpperCase, slice)
* Type validation (typeof)
* String trimming (trim)

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Space Complexity

O(k)

Where k is the number of valid words.

---

# Author

Angel Andrei Espiritu Pacheco