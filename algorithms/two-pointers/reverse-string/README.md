# Reverse String

This exercise reverses a string in-place using the two pointers technique.

---

# Problem

Given an array of characters, reverse the string in-place.

* Do not allocate extra space for another array
* Must modify the input array in-place
* Use O(1) extra memory

---

### Example

Input:

reverseString(["h", "e", "l", "l", "o"])

Output:

["o", "l", "l", "e", "h"]

---

# Folder Structure

reverse-string/
│
├── reverseString.js
├── reverseString.test.js
└── README.md

---

# Solutions Implemented

---

## 1. reverseString

* Uses two pointers (left and right)
* Swaps characters at left and right positions
* Moves pointers towards the center
* Continues until pointers meet or cross

---

# Concepts Practiced

* Two pointers technique
* In-place array modification
* Destructuring assignment for swapping
* While loops

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Space Complexity

O(1)

Only uses two pointers, no extra array.

---

# Author

Angel Andrei Espiritu Pacheco