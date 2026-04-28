# Container With Most Water

This exercise finds the maximum area of water a container can hold using the two pointers technique.

---

# Problem

Given an array where each element represents the height of a vertical line, find two lines that together with the x-axis form a container that holds the most water.

* The width between the lines is the distance between their indices
* The height of the container is the shorter of the two lines
* Area = min(height[left], height[right]) × (right - left)

---

### Example

Input:

containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])

Explanation:
The maximum area is between indices 1 (height 8) and 8 (height 7):
min(8, 7) = 7
width = 8 - 1 = 7
Area = 7 × 7 = 49

Output:

49

---

# Folder Structure

container-with-most-water/
│
├── containerWithMostWater.js
├── containerWithMostWater.test.js
└── README.md

---

# Solutions Implemented

---

## 1. containerWithMostWater

* Uses two pointers (left and right) starting at both ends
* Calculates area at current positions
* Moves the pointer with the smaller height inward
* If heights are equal, moves both pointers
* Keeps track of maximum area found

---

# Concepts Practiced

* Two pointers technique
* Greedy approach
* Area calculation

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