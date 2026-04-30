# Longest Ones After Flipping Zeros

This exercise finds the longest subarray of 1's after flipping up to k zeros using the sliding window technique.

---

# Problem

Given a binary array (containing only 0s and 1s) and an integer k, find the longest contiguous subarray that contains only 1's after flipping at most k zeros to 1's.

* Flipping means changing a 0 to a 1
* You can flip up to k zeros
* Find the maximum length of such a subarray

---

### Example

Input:

longestOnes([1,1,0,0,1,1,1,0,1,1,0,0,1,1,1], 2)

Explanation:
We can flip 2 zeros to 1's to get a longer subarray of consecutive 1's
The longest subarray has length 8

Output:

8

---

# Folder Structure

longest-ones/
│
├── longestOnes.js
├── longestOnes.test.js
└── README.md

---

# Solutions Implemented

---

## 1. longestOnes

* Uses sliding window with left and right pointers
* Tracks number of zeros in current window
* When zeros exceed k, shrink window from left
* Tracks maximum window size

---

# Concepts Practiced

* Sliding window technique
* Dynamic window size
* Two pointers

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Space Complexity

O(1)

Only uses a few variables.

---

# Author

Angel Andrei Espiritu Pacheco