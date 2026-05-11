# Swap First and Last

This exercise swaps the first and last elements of an array using different approaches.

---

# Problem

Given an array, swap the first and last elements in-place and return the modified array.

* If the array has 1 element, return the same array
* If the array is empty, return empty array

---

### Example

Input:

swapFirstAndLastBySpread([1, 2, 3, 4])

Output:

[4, 2, 3, 1]

---

# Folder Structure

swap-first-last/
│
├── swapFirstLast.js
├── swapFirstLast.test.js
└── README.md

---

# Solutions Implemented

---

## 1. swapFirstAndLastByTemVar (Temporary Variable)

* Uses a temporary variable to store the first element
* Assigns last element to first position
* Assigns temporary value to last position

## 2. swapFirstAndLastBySplice (Splice)

* Uses splice() to remove the last element and insert first element at the end
* Assigns the removed last element to the first position

## 3. swapFirstAndLastBySpread (Destructuring)

* Uses array destructuring to swap values in a single line
* Most concise solution

---

# Concepts Practiced

* Array indexing
* Temporary variable pattern
* Array.splice() method
* Array destructuring

---

# Time Complexity

O(1) for all solutions

---

# Space Complexity

O(1) for all solutions

---

# Author

Angel Andrei Espiritu Pacheco