# Sum Array Recursive

This exercise sums all elements of an array using recursion.

---

# Problem

Create a recursive function that:

* Takes an array of numbers as input
* Returns the sum of all elements
* Returns 0 for an empty array

---

### Example

Input:

sumArrayRecursive([1, 2, 3, 4])

Output:

10

Process:
1 + sumArrayRecursive([2, 3, 4])
1 + 2 + sumArrayRecursive([3, 4])
1 + 2 + 3 + sumArrayRecursive([4])
1 + 2 + 3 + 4 + sumArrayRecursive([])
1 + 2 + 3 + 4 + 0 = 10

---

# Folder Structure

sum-array/
│
├── sumArray.js
├── sumArray.test.js
└── README.md

---

# Solutions Implemented

---

## 1. sumArrayRecursive

* Uses recursion to sum array elements
* Base case: empty array returns 0
* Recursive case: first element + sum of remaining array

---

# Concepts Practiced

* Recursion
* Base case
* Recursive case
* Array slicing (slice method)

---

# Time Complexity

O(n²) due to slice() creating new arrays
Better alternative: use index parameter to avoid copying

Where n is the length of the array.

---

# Author

Angel Andrei Espiritu Pacheco