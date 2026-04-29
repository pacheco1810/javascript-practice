# Sum Positives

This exercise sums all positive numbers in an array using different approaches.

---

# Problem

Given an array of numbers, return the sum of all positive numbers (greater than 0).

* Zero is not considered positive
* Negative numbers are ignored
* If no positive numbers exist, return 0

---

### Example

Input:

sumPositivesByFor([1, -2, 3, -4, 5])

Process:
1 + 3 + 5 = 9

Output:

9

---

# Folder Structure

sum-positives/
│
├── sumPositives.js
├── sumPositives.test.js
└── README.md

---

# Solutions Implemented

---

## 1. sumPositivesByFor

* Uses for...of loop to iterate
* Adds to accumulator when number is positive

## 2. sumPositivesByMethods

* Filters positive numbers
* Reduces to sum using reduce()

---

# Concepts Practiced

* Array iteration (for...of)
* Array methods (filter, reduce)
* Accumulator pattern

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Author

Angel Andrei Espiritu Pacheco