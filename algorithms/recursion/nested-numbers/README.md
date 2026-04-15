# Nested Numbers

This exercise analyzes nested arrays of numbers to find max, min, sum, count, average, parity, and custom condition information using recursion.

---

# Problem

Given a nested array of numbers, create functions that:

* Find the maximum, minimum, sum, count, and average of all numbers
* Group numbers by parity (even/odd)
* Sum even and odd numbers separately
* Count numbers that meet a custom condition
* Sum numbers that meet a custom condition
* Group numbers by a custom condition

---

### Example

Input:

data = [3, [5, 1], [7, [2, 9]], 4]

Output (analyzeNestedNumbers):
{ max: 9, min: 1, sum: 31, count: 7, average: 4.428571428571429 }

Output (groupByConditionNested, n => n % 2 === 0):
{ true: [2, 4], false: [3, 5, 1, 7, 9] }

---

# Folder Structure

nested-numbers/
│
├── nestedNumbers.js
├── nestedNumbers.test.js
└── README.md

---

# Solutions Implemented

---

## 1. analyzeNestedNumbers

* Uses recursion with reduce()
* Tracks max, min, sum, and count
* Calculates average from sum and count

## 2. groupNumbersByParityNested

* Groups numbers into even and odd arrays
* Uses recursion to traverse nested arrays

## 3. sumParityNested

* Sums even and odd numbers separately
* Uses recursion with reduce()

## 4. countByConditionNested

* Counts numbers that satisfy a custom condition
* Uses higher-order function (callback)

## 5. sumByConditionNested

* Sums numbers that satisfy a custom condition
* Uses higher-order function (callback)

## 6. groupByConditionNested

* Groups numbers by a custom condition
* Returns { true: [], false: [] }

---

# Concepts Practiced

* Recursion
* Nested array traversal
* Array.reduce()
* Array.isArray()
* Higher-order functions (callbacks)
* Conditional logic

---

# Time Complexity

O(n)

Where n is the total number of elements in all nested arrays.

---

# Author

Angel Andrei Espiritu Pacheco