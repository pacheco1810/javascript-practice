# Calculate Simple

This exercise calculates the result of a simple arithmetic expression containing only addition and subtraction using a stack.

---

# Problem

Given a string expression containing numbers and the operators `+` and `-`, calculate the result.

* Numbers can be positive or negative
* Multiple digits are supported
* No parentheses or other operators

---

### Example

Input:

calculateSimple("7-2+4")

Process:
7 - 2 + 4 = 9

Output:

9

---

# Folder Structure

calculate-simple/
│
├── calculateSimple.js
├── calculateSimple.test.js
└── README.md

---

# Solutions Implemented

---

## 1. calculateSimple

* Uses a stack to store numbers with their signs
* Tracks current number being built (supports multiple digits)
* Tracks current sign (+1 or -1)
* When operator is found, pushes number with sign to stack
* Finally sums all numbers in the stack

---

# Concepts Practiced

* Stack data structure
* String iteration
* Regular expressions for digit detection
* Multi-digit number parsing

---

# Time Complexity

O(n)

Where n is the length of the expression string.

---

# Author

Angel Andrei Espiritu Pacheco