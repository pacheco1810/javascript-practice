# Minimum Add to Make Parentheses Valid

This exercise finds the minimum number of parentheses to add to make a string of parentheses valid.

---

# Problem

Given a string containing only the characters `(` and `)`, return the minimum number of parentheses that must be added to make the string valid.

A parentheses string is valid if:

* Every opening parenthesis has a corresponding closing parenthesis
* Parentheses are properly nested

---

### Example

Input:

minAddToMakeValid("())")

Process:
"())" → add one '(' at the beginning → "(() )" → valid

Output:

1

---

# Folder Structure

min-add-to-make-valid/
│
├── minAddToMakeValid.js
├── minAddToMakeValid.test.js
└── README.md

---

# Solutions Implemented

---

## 1. minAddToMakeValid

* Uses a stack to track unmatched opening parentheses
* Uses a counter for unmatched closing parentheses
* For each character:
  - If `(` → push to stack
  - If `)` → if stack has `(` → pop (matched)
  - Otherwise → count++ (unmatched closing)
* Returns stack.length (unmatched `(`) + count (unmatched `)`)

---

# Concepts Practiced

* Stack data structure
* Parentheses matching
* Greedy approach

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Space Complexity

O(n)

---

# Author

Angel Andrei Espiritu Pacheco