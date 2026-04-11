# Flatten Array

This exercise flattens a nested array recursively.

---

# Problem

Create a recursive function that:

* Takes a nested array as input
* Returns a new array with all elements flattened (no nesting)

---

### Example

Input:

flattenArray([1, [2, [3, 4]], 5])

Output:

[1, 2, 3, 4, 5]

---

# Folder Structure

flatten-array/
│
├── flattenArray.js
├── flattenArray.test.js
└── README.md

---

# Solutions Implemented

---

## 1. flattenArray

* Uses recursion to traverse nested arrays
* Base case: item is not an array → push to result
* Recursive case: item is an array → call flattenArray on it

---

# Concepts Practiced

* Recursion
* Array.isArray()
* Spread operator
* For...of loop

---

# Time Complexity

O(n)

Where n is the total number of elements in all nested arrays.

---

# Author

Angel Andrei Espiritu Pacheco