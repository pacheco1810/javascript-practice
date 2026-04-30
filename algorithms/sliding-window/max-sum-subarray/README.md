# Maximum Sum Subarray of Size K

This exercise finds the maximum sum of any contiguous subarray of size k using the sliding window technique.

---

# Problem

Given an array of integers and a number k, find the maximum sum of any contiguous subarray of length k.

* Subarray must contain exactly k elements
* Elements can be positive, negative, or zero

---

### Example

Input:

maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)

Process:
- [1,4,2,10] → sum = 17
- [4,2,10,23] → sum = 39
- [2,10,23,3] → sum = 38
- [10,23,3,1] → sum = 37
- [23,3,1,0] → sum = 27
- [3,1,0,20] → sum = 24
Maximum sum = 39

Output:

39

---

# Folder Structure

max-sum-subarray/
│
├── maxSumSubarray.js
├── maxSumSubarray.test.js
└── README.md

---

# Solutions Implemented

---

## 1. maxSumSubarray

* Calculates sum of first k elements (initial window)
* Slides window by subtracting element that leaves and adding new element
* Tracks maximum sum using Math.max()

---

# Concepts Practiced

* Sliding window technique
* Fixed window size
* Optimization (O(n) instead of O(n×k))

---

# Time Complexity

O(n)

Where n is the length of the array (single pass).

---

# Space Complexity

O(1)

Only uses a few variables.

---

# Author

Angel Andrei Espiritu Pacheco