# Bouncer

This exercise removes all falsy values from an array.

---

# Problem

Given an array containing various values, return a new array with all falsy values removed.

Falsy values in JavaScript:
* false
* null
* 0
* "" (empty string)
* undefined
* NaN

---

### Example

Input:

[7, "ate", "", false, 9]

Output:

[7, "ate", 9]

---

# Folder Structure

bouncer/
│
├── bouncer.js
├── bouncer.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Bouncer with for...in Loop

* Iterates through array using for...in loop
* Checks if value is truthy using double negation
* Pushes truthy values to new array

Purpose:
Practice array iteration, truthy/falsy values, and conditional logic.

---

# Concepts Practiced

* Arrays
* Truthy and falsy values
* for...in loop
* Double negation operator (!)
* Conditional statements

---

# Time Complexity

O(n)

Where n is the number of elements in the array.

---

# Author

Angel Andrei Espiritu Pacheco