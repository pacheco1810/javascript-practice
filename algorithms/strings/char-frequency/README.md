# Character Frequency

This exercise finds the most frequent and least frequent characters in a string, considering only letters (a-z, A-Z).

---

# Problem

Given a string, return:

* The most frequent character(s) (letters only)
* The least frequent character(s) (letters only)

If there is a single most/least frequent character, return that character.
If there is a tie, return an array of all characters with that frequency.

---

### Example

Input:

getMostFrequentChar("hello world")
getLeastFrequentChar("hello world")

Output:

"l"
["h", "e", "o", "w", "r", "d"]

---

# Folder Structure

char-frequency/
│
├── charFrequency.js
├── charFrequency.test.js
└── README.md

---

# Solutions Implemented

---

## 1. getMostFrequentChar

* Uses regex to extract only letters
* Uses reduce to count frequency
* Tracks max frequency and characters
* Returns single char or array for ties

## 2. getLeastFrequentChar

* Filters only letters using regex
* Uses reduce to count frequency
* Tracks min frequency
* Returns array of chars with min frequency

---

# Concepts Practiced

* Regular expressions (/[a-zA-Z]/g)
* Array methods (reduce, filter)
* Object as frequency counter
* Conditional logic for ties

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Author

Angel Andrei Espiritu Pacheco