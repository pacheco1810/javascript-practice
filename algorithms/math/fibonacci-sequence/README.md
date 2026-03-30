# Fibonacci Sequence

This exercise generates the Fibonacci sequence up to a specified count, with an option to include zero.

---

# Problem

Create a function that returns an array containing the Fibonacci sequence.

The function accepts two parameters:
* count: number of elements to return
* includeZero: boolean that determines if the sequence starts with 0

Fibonacci sequence:
* With zero: 0, 1, 1, 2, 3, 5, 8, 13...
* Without zero: 1, 1, 2, 3, 5, 8, 13, 21...

---

### Example

Input:

Fibonacci(10, false)

Output:

[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

---

# Folder Structure

fibonacci-sequence/
│
├── fibonacciSequence.js
├── fibonacciSequence.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Fibonacci Sequence Generator

* Uses a for loop to generate the sequence
* Optionally adds 0 at the beginning if includeZero is true
* Handles edge cases (count <= 0)

Purpose:
Practice loops, array manipulation, and conditional logic.

---

# Concepts Practiced

* Fibonacci sequence
* For loops
* Arrays
* Conditional statements
* Edge case handling

---

# Time Complexity

O(n)

Where n is the count of Fibonacci numbers to generate.

---

# Author

Angel Andrei Espiritu Pacheco