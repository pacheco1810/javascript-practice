# Double Positives

This exercise doubles all positive numbers (including zero) in an array using different approaches.

---

# Problem

Given an array of numbers, return a new array containing only the positive numbers (>= 0) doubled.

* Negative numbers are excluded
* Zero is included and doubled to 0
* The order of elements should be preserved

---

### Example

Input:

doublePositivesByForEach([1, -2, 3, -4, 5])

Process:
- 1 → positive → 2
- -2 → negative → skip
- 3 → positive → 6
- -4 → negative → skip
- 5 → positive → 10

Output:

[2, 6, 10]

---

# Folder Structure

double-positives/
│
├── doublePositives.js
├── doublePositives.test.js
└── README.md

---

# Solutions Implemented

---

## 1. doublePositivesByFor

* Uses for...of loop to iterate
* Pushes doubled values when condition is met

## 2. doublePositivesByFilter + Map

* Filters positive numbers, then maps to double
* Most concise functional approach

## 3. doublePositivesByForEach

* Uses forEach method with conditional push

## 4. doublePositivesByReduce

* Uses reduce to accumulate doubled values

---

# Concepts Practiced

* Array iteration (for...of, forEach)
* Array methods (filter, map, reduce)
* Conditional logic

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Author

Angel Andrei Espiritu Pacheco