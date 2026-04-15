# Nested Numbers

This exercise analyzes nested arrays of numbers to find max, min, sum, count, average, and parity information using recursion.

---

# Problem

Given a nested array of numbers, create functions that:

* Find the maximum, minimum, sum, count, and average of all numbers
* Group numbers by parity (even/odd)
* Sum even and odd numbers separately

---

### Example

Input:

data = [3, [5, 1], [7, [2, 9]], 4]

Output (analyzeNestedNumbers):
{ max: 9, min: 1, sum: 31, count: 7, average: 4.428571428571429 }

Output (groupNumbersByParityNested):
{ even: [2, 4], odd: [3, 5, 1, 7, 9] }

Output (sumParityNested):
{ even: 6, odd: 25 }

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

---

# Concepts Practiced

* Recursion
* Nested array traversal
* Array.reduce()
* Array.isArray()
* Spread operator
* Math.max / Math.min

---

# Time Complexity

O(n)

Where n is the total number of elements in all nested arrays.

---

# Author

Angel Andrei Espiritu Pacheco