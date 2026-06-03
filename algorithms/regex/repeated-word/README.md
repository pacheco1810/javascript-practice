# Repeated Word

This exercise detects if a word appears consecutively twice in a string using regular expressions.

---

# Problem

Create a function that checks if any word in the string is repeated consecutively.

* Two identical words must appear one after another
* Returns true if found, false otherwise

---

### Example

Input:

hasRepeatedWord("hello hello world")

Output:

true

---

# Folder Structure

repeated-word/
│
├── repeatedWord.js
├── repeatedWord.test.js
└── README.md

---

# Regex Pattern

/(\w+)\s+\1/

| Component | Description |
|-----------|-------------|
| (\w+) | Capturing group for a word |
| \s+ | One or more spaces |
| \1 | Backreference to the captured word |

---

# Concepts Practiced

* Regular expressions
* Capturing groups
* Backreferences
* Word detection

---

# Author

Angel Andrei Espiritu Pacheco