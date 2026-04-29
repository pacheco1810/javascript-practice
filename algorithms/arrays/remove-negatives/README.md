# Remove Negatives

This exercise removes all negative numbers from an array using different approaches.

---

# Problem

Given an array of numbers, return a new array containing only the non-negative numbers (zero and positive numbers).

* Negative numbers should be removed
* Zero should be kept
* The order of remaining elements should be preserved

---

### Example

Input:

removeNegativesByReduce([1, -2, 3, -4, 5])

Output:

[1, 3, 5]

---

# Folder Structure

remove-negatives/
│
├── removeNegatives.js
├── removeNegatives.test.js
└── README.md

---

# Solutions Implemented

---

## 1. removeNegativesByFor

* Iterates backwards to avoid index shifting issues
* Uses splice() to remove negative elements in-place

## 2. removeNegativesByFilter

* Uses filter() with condition num >= 0
* Most concise solution

## 3. removeNegativesByReduce

* Uses reduce() to accumulate non-negative numbers
* Pushes to accumulator when condition is met

---

# Concepts Practiced

* Array iteration (backwards for safe removal)
* Array methods (filter, reduce, splice)
* Conditional logic

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Author

Angel Andrei Espiritu Pacheco