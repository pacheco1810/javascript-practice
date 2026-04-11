# Sum Nested Array

This exercise sums all numbers in a nested array using recursion.

---

# Problem

Create a recursive function that:

* Takes a nested array of numbers as input
* Returns the sum of all numbers

---

### Example

Input:

sumNestedArray([1, [2, [3, 4]], 5])

Output:

15

Explanation:
1 + 2 + 3 + 4 + 5 = 15

---

# Folder Structure

sum-nested-array/
│
├── sumNestedArray.js
├── sumNestedArray.test.js
└── README.md

---

# Solutions Implemented

---

## 1. sumNestedArray

* Uses reduce() with recursion
* Base case: empty array returns 0
* If item is array → recursively sum its elements
* If item is number → add to accumulator

---

# Concepts Practiced

* Recursion
* Array.reduce()
* Array.isArray()
* Type checking

---

# Time Complexity

O(n)

Where n is the total number of elements in all nested arrays.

---

# Author

Angel Andrei Espiritu Pacheco