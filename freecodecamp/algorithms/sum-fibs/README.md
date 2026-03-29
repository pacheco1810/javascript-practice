# Sum Fibs

This exercise sums all odd Fibonacci numbers up to a given number.

---

# Problem

Given a positive integer, return the sum of all odd Fibonacci numbers that are less than or equal to that number.

The first two Fibonacci numbers are 1 and 1. Each subsequent number is the sum of the previous two.

---

### Example

Input:

sumFibs(1000)

Output:

1785

Fibonacci numbers up to 1000:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987

Odd Fibonacci numbers:
1, 1, 3, 5, 13, 21, 55, 89, 233, 377, 987

Sum: 1 + 1 + 3 + 5 + 13 + 21 + 55 + 89 + 233 + 377 + 987 = 1785

---

# Folder Structure

sum-fibs/
│
├── sumFibs.js
├── sumFibs.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Sum Fibs with While Loop

* Uses a while loop to generate Fibonacci numbers
* Checks if each number is odd using modulo operator
* Accumulates sum of odd numbers

Purpose:
Practice Fibonacci sequence generation, while loops, and conditional logic.

---

# Concepts Practiced

* Fibonacci sequence
* While loops
* Modulo operator (%)
* Conditional statements
* Variable swapping

---

# Time Complexity

O(n)

Where n is the number of Fibonacci numbers up to the given limit.

---

# Author

Angel Andrei Espiritu Pacheco