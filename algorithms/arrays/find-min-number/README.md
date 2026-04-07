# Find Minimum Number

This exercise finds the minimum number in an array using different approaches.

---

# Problem

Given an array of numbers, return the smallest (minimum) value.

* If the array has one element, return that element
* Works with positive, negative, and decimal numbers

---

### Example

Input:

minNumberByFind([2, 5, 8, 1, 3])

Output:

1

---

# Folder Structure

find-min-number/
│
├── findMinNumber.js
├── findMinNumber.test.js
└── README.md

---

# Solutions Implemented

---

## 1. minNumberByFor

* Uses nested loops (bubble sort style)
* Compares each element with all others
* Returns first element that is <= all others

## 2. minNumberByFind

* Uses Math.min() with spread operator
* Uses find() to locate the minimum value

## 3. minNumberByMathMin

* Uses Math.min() with spread operator
* Most concise solution

---

# Concepts Practiced

* Nested loops
* Math.min()
* Spread operator
* Array find() method
* Comparison logic

---

# Time Complexity

* minNumberByFor: O(n²)
* minNumberByFind: O(n)
* minNumberByMathMin: O(n)

Where n is the length of the array.

---

# Author

Angel Andrei Espiritu Pacheco