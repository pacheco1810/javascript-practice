# Fibonacci Variants

This exercise implements various Fibonacci sequence operations including even/odd sequences and sums.

---

# Problem

Create functions that:

* Generate the Fibonacci sequence up to a count
* Sum Fibonacci numbers less than a limit
* Generate only even Fibonacci numbers
* Sum even Fibonacci numbers less than a limit
* Generate only odd Fibonacci numbers
* Sum odd Fibonacci numbers less than a limit

---

### Example

Input:

fibonacciSequence(10)
fibonacciSequenceSumNumber(10)

Output:

[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
20

---

# Folder Structure

fibonacci-variants/
│
├── fibonacciVariants.js
├── fibonacciVariants.test.js
└── README.md

---

# Solutions Implemented

---

## 1. fibonacciSequence

* Generates Fibonacci sequence with specified count
* Starts with [0, 1]

## 2. fibonacciSequenceSumNumber

* Sums all Fibonacci numbers less than given limit

## 3. fibonacciEvenSequence

* Generates only even Fibonacci numbers
* Uses modulo operator to filter

## 4. fibonacciEvenSequenceSumNumber

* Sums even Fibonacci numbers less than given limit

## 5. fibonacciOddSequence

* Generates only odd Fibonacci numbers
* Uses modulo operator to filter

## 6. fibonacciOddSequenceSumNumber

* Sums odd Fibonacci numbers less than given limit

---

# Concepts Practiced

* Fibonacci sequence
* Loops (for, while)
* Modulo operator (%)
* Array manipulation
* Conditional filtering

---

# Time Complexity

O(n)

Where n is the count or limit.

---

# Author

Angel Andrei Espiritu Pacheco