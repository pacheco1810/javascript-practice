# Most Frequent Word

This exercise finds the most frequent word in an array using reduce.

---

# Problem

Given an array of words, return the word that appears most frequently.

* If multiple words have the same highest frequency, return the first one encountered
* Non-string elements and empty strings should be ignored
* If the array is empty or contains no valid words, return null

---

### Example

Input:

mostFrequentWord(["apple", "banana", "apple", "orange", "banana", "apple"])

Explanation:
- apple appears 3 times
- banana appears 2 times
- orange appears 1 time

Output:

"apple"

---

# Folder Structure

most-frequent-word/
│
├── mostFrequentWord.js
├── mostFrequentWord.test.js
└── README.md

---

# Solutions Implemented

---

## 1. mostFrequentWord

* Uses reduce() to build frequency counter
* Tracks maxCount and mostFrequent word
* Ignores non-string and empty string elements
* Returns mostFrequent or null if none found

---

# Concepts Practiced

* Array reduce() method
* Frequency counting
* Type checking (typeof)
* String validation (trim)

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Space Complexity

O(k)

Where k is the number of unique valid words.

---

# Author

Angel Andrei Espiritu Pacheco