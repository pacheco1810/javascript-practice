# Fibonacci Sum

This exercise provides functions to sum odd or even Fibonacci numbers up to a given limit.

---

# Problem

Create two functions:

* oddFibonacci(num): Sums all odd Fibonacci numbers ≤ num
* evenFibonacci(num): Sums all even Fibonacci numbers ≤ num

Fibonacci sequence starts with 1, 1, 2, 3, 5, 8, 13, 21...

---

### Example

Input:

oddFibonacci(1000)
evenFibonacci(1000)

Output:

1785
798

---

# Folder Structure

fibonacci-sum/
│
├── fibonacciSum.js
├── fibonacciSum.test.js
└── README.md

---

# Solutions Implemented

---

## 1. oddFibonacci

* Uses a while loop to generate Fibonacci numbers
* Checks if each number is odd using modulo operator
* Accumulates sum of odd numbers

## 2. evenFibonacci

* Uses a mathematical formula for even Fibonacci numbers
* Each even Fibonacci number follows: F(n) = 4 * F(n-1) + F(n-2)
* Starts with 2 and 8

Purpose:
Practice Fibonacci sequence generation, mathematical optimization, and conditional logic.

---

# Concepts Practiced

* Fibonacci sequence
* While loops
* Modulo operator (%)
* Mathematical optimization
* Conditional statements

---

# Time Complexity

O(n)

Where n is the number of Fibonacci numbers up to the given limit.

---

# Author

Angel Andrei Espiritu Pacheco