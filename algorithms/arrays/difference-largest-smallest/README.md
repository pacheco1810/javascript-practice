# Difference Between Largest and Smallest

This exercise finds the difference between the largest and smallest numbers in an array using different approaches.

---

# Problem

Given an array of numbers, return the difference between the maximum and minimum values.

* The result is always non-negative (max - min)
* If the array has one element, return 0
* If the array is empty, return 0

---

### Example

Input:

differenceByFor([5, 10, 2, 8, 3])

Explanation:
- Maximum: 10
- Minimum: 2
- Difference: 10 - 2 = 8

Output:

8

---

# Folder Structure

difference-largest-smallest/
│
├── differenceLargestSmallest.js
├── differenceLargestSmallest.test.js
└── README.md

---

# Solutions Implemented

---

## 1. differenceByFor

* Uses a for...of loop to iterate through the array
* Keeps track of min and max values
* Returns max - min

## 2. differenceBySort

* Sorts the array in ascending order
* Returns last element - first element
* Uses spread operator to avoid mutating original array

## 3. differenceByReduce

* Uses reduce() to simultaneously track min, max, and difference
* Returns the difference from the accumulator

---

# Concepts Practiced

* Array iteration (for...of)
* Array methods (sort, reduce)
* Spread operator (to avoid mutation)
* Accumulator pattern

---

# Time Complexity

* differenceByFor: O(n)
* differenceBySort: O(n log n)
* differenceByReduce: O(n)

---

# Space Complexity

* differenceByFor: O(1)
* differenceBySort: O(n) for the copied sorted array
* differenceByReduce: O(1)

---

# Author

Angel Andrei Espiritu Pacheco