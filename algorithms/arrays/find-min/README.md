# Find Minimum

This exercise finds the minimum number in an array using different approaches.

---

# Problem

Given an array of numbers, return the smallest (minimum) value.

* If the array has one element, return that element
* Works with positive, negative, and decimal numbers

---

### Example

Input:

findMinWithForEach([8, 3, 12, 1, 6])

Output:

1

---

# Folder Structure

find-min/
│
├── findMin.js
├── findMin.test.js
└── README.md

---

# Solutions Implemented

---

## 1. findMinWithFor

* Uses a traditional for loop
* Starts with first element as initial minimum
* Compares each element and updates minimum if smaller

## 2. findMinWithMath

* Uses Math.min() with spread operator
* Most concise solution

## 3. findMinWithForEach

* Uses forEach method to iterate
* Updates minimum value as it traverses the array

---

# Concepts Practiced

* Array iteration
* For loops
* ForEach method
* Math.min()
* Spread operator
* Comparison logic

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Author

Angel Andrei Espiritu Pacheco