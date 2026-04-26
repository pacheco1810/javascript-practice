# Merge Sorted Arrays

This exercise merges two sorted arrays into one sorted array using the two pointers technique.

---

# Problem

Given two sorted arrays in ascending order, merge them into a single sorted array.

* Both input arrays are already sorted
* The result must also be sorted in ascending order
* Handle arrays of different lengths

---

### Example

Input:

mergeSortedArrays([1, 3, 5], [2, 4, 6])

Process:
- Compare 1 and 2 → take 1
- Compare 3 and 2 → take 2
- Compare 3 and 4 → take 3
- Compare 5 and 4 → take 4
- Compare 5 and 6 → take 5
- Take remaining 6

Output:

[1, 2, 3, 4, 5, 6]

---

# Folder Structure

merge-sorted-arrays/
│
├── mergeSortedArrays.js
├── mergeSortedArrays.test.js
└── README.md

---

# Solutions Implemented

---

## 1. mergeSortedArrays

* Uses two pointers (left for nums1, right for nums2)
* Compares elements at both pointers
* Adds the smaller element to result
* Moves the pointer of the taken element
* When one array is exhausted, adds remaining elements from the other

---

# Concepts Practiced

* Two pointers technique
* Array manipulation
* While loops
* Spread operator

---

# Time Complexity

O(n + m)

Where n and m are the lengths of the arrays.

---

# Space Complexity

O(n + m)

For the result array.

---

# Author

Angel Andrei Espiritu Pacheco