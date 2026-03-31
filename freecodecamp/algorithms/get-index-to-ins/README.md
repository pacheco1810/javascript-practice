# Get Index to Insert

This exercise finds the lowest index where a value should be inserted into an array to maintain sort order.

---

# Problem

Given a sorted array (or unsorted array that will be sorted) and a number, return the lowest index where the number should be inserted to maintain ascending order.

* The array should be sorted first
* If the number is already present, return the index of the first occurrence
* If the number is larger than all elements, return the length of the array

---

### Example

Input:

getIndexToIns([10, 20, 30, 40, 50], 35)

Output:

3

Explanation:
After sorting: [10, 20, 30, 40, 50]
35 should be inserted at index 3 (between 30 and 40)

---

# Folder Structure

get-index-to-ins/
│
├── getIndexToIns.js
├── getIndexToIns.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Get Index with Sort and FindIndex

* Sorts the array in ascending order
* Uses findIndex to locate first element >= num
* Returns index if found, otherwise returns array length

Purpose:
Practice array sorting, findIndex method, and ternary operator.

---

# Concepts Practiced

* Array methods (sort, findIndex)
* Sorting with custom comparator
* Ternary operator
* Edge case handling

---

# Time Complexity

O(n log n)

Where n is the length of the array (due to sorting).

---

# Author

Angel Andrei Espiritu Pacheco