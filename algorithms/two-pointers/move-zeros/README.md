# Move Zeros

This exercise moves all zeros to the end of an array while preserving the relative order of non-zero elements using different approaches.

---

# Problem

Given an array of integers, move all zeros to the end of the array while maintaining the relative order of the non-zero elements.

* Must be done in-place (except the new array version)
* Do not create a copy of the array (except the new array version)
* The relative order of non-zero elements must stay the same

---

### Example

Input:

moveZeros([0, 1, 0, 3, 12])

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

## 1. moveZeros (Two-pass)

* First pass: copy all non-zero elements to front
* Second pass: fill remaining positions with zeros

## 2. moveZerosToEndNewArray (New Array)

* Creates a new array filled with zeros
* Places non-zero elements in order at the beginning
* Does not modify original array

## 3. moveZerosToEndTwoPointers (Swap)

* Uses two pointers (left and right)
* Swaps non-zero elements with zeros
* Single pass, in-place modification

---

# Concepts Practiced

* Two pointers technique
* In-place array manipulation
* Array creation methods
* Swap technique

---

# Time Complexity

* All versions: O(n)

---

# Space Complexity

* Two-pass and Swap: O(1)
* New Array: O(n)

---

# Author

Angel Andrei Espiritu Pacheco