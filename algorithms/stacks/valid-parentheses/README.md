# Valid Parentheses

This exercise checks if parentheses, brackets, and braces in a string are valid and balanced using a stack.

---

# Problem

Given a string containing only the characters `(`, `)`, `{`, `}`, `[`, `]`, determine if the input string is valid.

A valid string must satisfy:

* Open brackets must be closed by the same type of brackets
* Open brackets must be closed in the correct order
* Every closing bracket has a corresponding opening bracket

---

### Example

Input:

isValidParentheses("()[]{}")

Output:

true

---

# Folder Structure

valid-parentheses/
│
├── validParentheses.js
├── validParentheses.test.js
└── README.md

---

# Solutions Implemented

---

## 1. isValidParentheses

* Uses a stack to track opening brackets
* Uses an object map for bracket pairs
* Iterates through each character:
  - If opening bracket → push to stack
  - If closing bracket → check if matches top of stack
* Returns true only if stack is empty at the end

---

# Concepts Practiced

* Stack data structure
* Object as lookup map
* String iteration
* Bracket matching

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Author

Angel Andrei Espiritu Pacheco