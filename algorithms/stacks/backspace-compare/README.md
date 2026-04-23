# Backspace Compare

This exercise compares two strings after processing backspace characters (#) using a stack.

---

# Problem

Given two strings containing lowercase letters and backspace characters `#`, determine if the final strings are equal after processing all backspaces.

* A backspace `#` removes the previous character
* If there are no characters before `#`, nothing is removed
* Compare the resulting strings

---

### Example

Input:

backspaceCompare("ab#c", "ad#c")

Process:
"ab#c" → "ac" (b is removed)
"ad#c" → "ac" (d is removed)

Output:

true

---

# Folder Structure

backspace-compare/
│
├── backspaceCompare.js
├── backspaceCompare.test.js
└── README.md

---

# Solutions Implemented

---

## 1. backspaceCompare

* Uses a stack to process each string
* Iterates through characters:
  - If `#` and stack not empty → pop last character
  - Otherwise → push character to stack
* Compares final stack contents as strings

---

# Concepts Practiced

* Stack data structure
* String processing
* Character comparison

---

# Time Complexity

O(n + m)

Where n and m are the lengths of the strings.

---

# Space Complexity

O(n + m)

---

# Author

Angel Andrei Espiritu Pacheco