# All Positive

This exercise checks if all numbers in an array are positive using different approaches.

---

# Problem

Given an array of numbers, return true if all numbers are greater than 0, false otherwise.

* Zero is not considered positive
* Negative numbers make the function return false
* Empty array returns true (vacuously true)

---

### Example

Input:

allNumbersByEvery([1, 5, 7, 1])

Output:

true

---

# Folder Structure

all-positive/
│
├── allPositive.js
├── allPositive.test.js
└── README.md

---

# Solutions Implemented

---

## 1. allNumbersByFor

* Uses a for...of loop to iterate through the array
* Returns false immediately if a non-positive number is found
* Returns true if loop completes without finding non-positive numbers

## 2. allNumbersByEvery

* Uses the built-in every() method
* Most concise solution
* Checks if every element satisfies number > 0

---

# Concepts Practiced

* Array iteration
* For...of loop
* Array.every() method
* Conditional logic
* Early return pattern

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Author

Angel Andrei Espiritu Pacheco