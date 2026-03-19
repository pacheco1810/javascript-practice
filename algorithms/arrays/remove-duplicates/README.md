# Remove Duplicates

This exercise implements different approaches to remove duplicate values from an array.

---

# Problem

Given an array of values, return a new array with all duplicate values removed.

---

### Example

Input:

[1, 2, 2, 3, 4, 4]

Output:

[1, 2, 3, 4]

---

# Folder Structure

remove-duplicates/
│
├── removeDuplicates.js
├── removeDuplicates.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Classic Loop (Algorithmic Approach)

* Iterates through the array manually
* Checks if the value already exists in the result array
* Adds only unique values

Purpose:
Practice control flow and manual duplicate detection.

---

## 2. forEach Loop

* Uses `forEach` for iteration
* Checks for duplicates using array methods

Purpose:
Practice array iteration and conditional logic.

---

## 3. Functional Approach (filter / Set)

* Uses `filter` or `Set`
* Returns only unique values

Purpose:
Practice higher-order functions and modern JavaScript features.

---

# Concepts Practiced

* Arrays
* Loops
* Conditionals
* forEach
* filter
* Set (ES6)
* Data cleaning

---

# Time Complexity

O(n²) for classic approaches
O(n) using Set

---

# Author

Angel Andrei Espiritu Pacheco
