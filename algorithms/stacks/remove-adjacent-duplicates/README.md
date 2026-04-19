# Remove Adjacent Duplicates

This exercise removes all adjacent duplicates in a string using a stack.

---

# Problem

Given a string, repeatedly remove adjacent duplicate letters until no duplicates remain.

* Two adjacent equal letters cancel each other out
* After removal, new adjacent duplicates may form
* Continue until no duplicates remain

---

### Example

Input:

removeDuplicates("abbaca")

Process:
"abbaca" → "aaca" (remove "bb")
"aaca" → "ca" (remove "aa")

Output:

"ca"

---

# Folder Structure

remove-adjacent-duplicates/
│
├── removeAdjacentDuplicates.js
├── removeAdjacentDuplicates.test.js
└── README.md

---

# Solutions Implemented

---

## 1. removeDuplicates

* Uses a stack to track characters
* Iterates through each character:
  - If stack top equals current char → pop from stack
  - Otherwise → push current char to stack
* Returns stack joined as string

---

# Concepts Practiced

* Stack data structure
* String manipulation
* Adjacent comparison

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Author

Angel Andrei Espiritu Pacheco