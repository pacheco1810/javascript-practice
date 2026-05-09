# Get Middle Element

This exercise returns the middle element(s) of an array.

---

# Problem

Given an array, return the middle element(s):

* If the array has an odd length, return the single middle element
* If the array has an even length, return an array with the two middle elements
* If the array is empty or input is not an array, return null

---

### Example

Input:

getMiddleElement([1, 2, 3, 4, 5])

Output:

3

Input:

getMiddleElement([1, 2, 3, 4])

Output:

[2, 3]

---

# Folder Structure

get-middle-element/
│
├── getMiddleElement.js
├── getMiddleElement.test.js
└── README.md

---

# Solutions Implemented

---

## 1. getMiddleElement

* Checks if input is a valid non-empty array
* Calculates middle index using Math.floor
* For odd length: returns element at middle index
* For even length: returns array with two middle elements

---

# Concepts Practiced

* Array validation
* Math.floor()
* Modulo operator (%)
* Conditional logic

---

# Time Complexity

O(1)

Constant time operation.

---

# Space Complexity

O(1)

---

# Author

Angel Andrei Espiritu Pacheco