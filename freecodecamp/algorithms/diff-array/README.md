# Diff Array

This exercise finds the symmetric difference between two arrays.

---

# Problem

Given two arrays, return a new array containing elements that are present in only one of the arrays (not both).

* Symmetric difference: elements in A or B but not in both
* Order of results may vary

---

### Example

Input:

diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
)

Output:

["pink wool"]

---

# Folder Structure

diff-array/
│
├── diffArray.js
├── diffArray.test.js
└── README.md

---

# Solutions Implemented

---

## 1. diffArrayV1 (Filter + Concat)

* Uses filter to find elements not in the other array
* Combines results with concat

## 2. diffArray (Set)

* Converts arrays to Set for O(1) lookup
* Uses filter and spread operator for efficiency

Purpose:
Practice array comparison, Set data structure, and algorithm optimization.

---

# Concepts Practiced

* Array methods (filter, concat, includes)
* Set data structure
* Spread operator
* Symmetric difference algorithm

---

# Time Complexity

* diffArrayV1: O(n × m)
* diffArray: O(n + m)

Where n and m are the lengths of the arrays.

---

# Author

Angel Andrei Espiritu Pacheco