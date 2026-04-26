# Remove Outer Parentheses

This exercise removes the outermost parentheses of every primitive string using a depth counter.

---

# Problem

A valid parentheses string is primitive if it cannot be split into two non-empty valid strings.

Given a valid parentheses string, remove the outermost parentheses of every primitive string and return the result.

---

### Example

Input:

removeOuterParentheses("(()())(())")

Explanation:
"(()())" + "(())"
After removing outer parentheses:
"()()" + "()" = "()()()"

Output:

"()()()"

---

# Folder Structure

remove-outer-parentheses/
│
├── removeOuterParentheses.js
├── removeOuterParentheses.test.js
└── README.md

---

# Solutions Implemented

---

## 1. removeOuterParentheses

* Uses a depth counter to track nesting level
* When encountering '(':
  - If depth > 0 (not outer), add to result
  - Increment depth
* When encountering ')':
  - Decrement depth first
  - If depth > 0 (not outer), add to result

---

# Concepts Practiced

* Depth counter (not exactly a stack, but similar concept)
* String manipulation
* Parentheses parsing

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Space Complexity

O(n)

For the result array/string.

---

# Author

Angel Andrei Espiritu Pacheco