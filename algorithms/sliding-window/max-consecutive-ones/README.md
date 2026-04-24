# Maximum Consecutive Ones

This exercise finds the maximum number of consecutive 1's in a binary array using a sliding window / counting approach.

---

# Problem

Given a binary array (containing only 0s and 1s), find the maximum number of consecutive 1's in the array.

* Count the longest streak of 1's
* Reset counter when a 0 is encountered

---

### Example

Input:

maxConsecutiveOnes([1, 1, 0, 1, 1, 1])

Explanation:
- First streak: 2 ones (positions 0-1)
- Second streak: 3 ones (positions 3-5)

Output:

3

---

# Folder Structure

max-consecutive-ones/
│
├── maxConsecutiveOnes.js
├── maxConsecutiveOnes.test.js
└── README.md

---

# Solutions Implemented

---

## 1. maxConsecutiveOnes

* Uses a simple counter to track current streak of 1's
* Iterates through each element:
  - If element is 1 → increment currentStreak
  - If element is 0 → reset currentStreak to 0
* Updates maxCounter using Math.max()

---

# Concepts Practiced

* Sliding window (implicit)
* Greedy counting
* Array iteration

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Space Complexity

O(1)

Only uses two variables.

---

# Author

Angel Andrei Espiritu Pacheco