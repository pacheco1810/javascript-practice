# Fibonacci Sum

This exercise provides functions to sum Fibonacci numbers based on different criteria.

---

# Problem

Create functions that:

* Sum all Fibonacci numbers up to a given limit
* Sum only odd Fibonacci numbers
* Sum only even Fibonacci numbers
* A calculator function that selects which sum to perform

---

### Example

Input:

calculateFibonacci(10, "add")
calculateFibonacci(10, "odd")
calculateFibonacci(10, "even")

Output:

143
10
10

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

## 1. addFibonacci

* Sums all Fibonacci numbers ≤ num

## 2. oddFibonacci

* Sums only odd Fibonacci numbers ≤ num

## 3. evenFibonacci

* Sums only even Fibonacci numbers ≤ num using optimized formula

## 4. calculateFibonacci

* Wrapper function that selects the appropriate sum based on option parameter

---

# Concepts Practiced

* Fibonacci sequence
* Switch statements
* Conditional logic
* Mathematical optimization

---

# Time Complexity

O(n)

Where n is the number of Fibonacci numbers up to the given limit.

---

# Author

Angel Andrei Espiritu Pacheco