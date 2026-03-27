# Sum All

This exercise sums all numbers in a range between two given numbers.

---

# Problem

Given an array with two numbers, return the sum of all numbers between them, inclusive.

* The two numbers may not be in order
* Include both endpoints in the sum

---

### Example

Input:

sumAll([10, 5])

Output:

45
(5 + 6 + 7 + 8 + 9 + 10 = 45)

---

# Folder Structure

sum-all/
│
├── sumAll.js
├── sumAll.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Sum All with For Loop

* Uses Math.max and Math.min to determine range boundaries
* Iterates from min to max with a for loop
* Accumulates sum in a variable

Purpose:
Practice array destructuring, Math methods, and loops.

---

# Concepts Practiced

* Array destructuring
* Math.max()
* Math.min()
* For loops
* Accumulator pattern

---

# Time Complexity

O(n)

Where n is the size of the range (max - min + 1).

---

# Author

Angel Andrei Espiritu Pacheco