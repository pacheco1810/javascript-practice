# Simplify Path

This exercise simplifies a Unix-style file path using a stack data structure.

---

# Problem

Given an absolute path for a Unix-style file system, simplify it by:

* A single period `.` refers to the current directory (ignore)
* A double period `..` refers to the parent directory (pop from stack)
* Multiple slashes `//` are treated as a single slash
* The result must always start with a slash `/`
* Remove trailing slashes

---

### Example

Input:

simplifyPath("/a/../../b/../c//.//")

Output:

"/c"

---

# Folder Structure

simplify-path/
│
├── simplifyPath.js
├── simplifyPath.test.js
└── README.md

---

# Solutions Implemented

---

## 1. simplifyPath

* Uses a stack to track valid directories
* Splits the path by `/`
* Iterates through each part:
  - Skip empty strings and `.`
  - Pop from stack for `..`
  - Push valid directory names to stack
* Joins stack with `/` and adds leading slash

---

# Concepts Practiced

* Stack data structure
* String manipulation
* Array methods (split, join, push, pop)

---

# Time Complexity

O(n)

Where n is the length of the path string.

---

# Author

Angel Andrei Espiritu Pacheco