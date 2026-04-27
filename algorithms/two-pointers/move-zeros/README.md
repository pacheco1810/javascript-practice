# Move Zeros

This exercise moves all zeros to the end of an array while preserving the relative order of non-zero elements using the two pointers technique.

---

# Problem

Given an array of integers, move all zeros to the end of the array while maintaining the relative order of the non-zero elements.

* Must be done in-place
* Do not create a copy of the array
* The relative order of non-zero elements must stay the same

---

### Example

Input:

moveZeros([0, 1, 0, 3, 12])

Process:
- Write pointer tracks position for next non-zero
- Read pointer scans the array
- Non-zero elements are written to write position
- Remaining positions filled with zeros

Output:

[1, 3, 12, 0, 0]

---

# Folder Structure

move-zeros/
│
├── moveZeros.js
├── moveZeros.test.js
└── README.md

---

# Solutions Implemented

---

## 1. moveZeros

* Uses two pointers: i (read) and write (write)
* First pass: copy all non-zero elements to front
* Second pass: fill remaining positions with zeros

---

# Concepts Practiced

* Two pointers technique
* In-place array manipulation
* Two-pass algorithm

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Space Complexity

O(1)

In-place modification.

---

# Author

Angel Andrei Espiritu Pacheco