# Word Counter

This exercise implements various functions to count and group words using reduce.

---

# Problem

Given an array of words, create functions that:

* Count frequency of each word
* Count words by their length
* Group words by their length
* Count words by their first letter

---

### Example

Input:

["apple", "banana", "apple", "orange"]

Output (countWords):
{ apple: 2, banana: 1, orange: 1 }

Output (countWordsByLength):
{ 5: 2, 6: 2 }

Output (groupWordsByLength):
{ 5: ["apple", "apple"], 6: ["banana", "orange"] }

Output (groupByFirstLetter):
{ a: 2, b: 1, o: 1 }

---

# Folder Structure

word-counter/
│
├── wordCounter.js
├── wordCounter.test.js
└── README.md

---

# Solutions Implemented

---

## 1. countWords

* Uses reduce() to count frequency of each word
* Uses nullish coalescing operator (??) for default values

## 2. countWordsByLength

* Uses reduce() to count words by string length

## 3. groupWordsByLength

* Uses reduce() to group words by length
* Uses spread operator to accumulate arrays

## 4. groupByFirstLetter

* Uses reduce() to count words by first letter
* Converts first letter to lowercase for case insensitivity

---

# Concepts Practiced

* Array reduce() method
* Nullish coalescing operator (??)
* Spread operator
* Object accumulation
* String methods (length, toLowerCase, charAt)

---

# Time Complexity

O(n)

Where n is the number of words.

---

# Author

Angel Andrei Espiritu Pacheco