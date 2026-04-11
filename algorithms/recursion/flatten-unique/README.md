# Flatten Unique

This exercise flattens a nested array and removes duplicates using recursion.

---

# Problem

Create a recursive function that:

* Takes a nested array as input
* Returns a new array with all elements flattened
* Removes duplicate values (only unique values)

---

### Example

Input:

flattenUnique([1, [2, [2, 3]], 3, 4])

Output:

[1, 2, 3, 4]

---

# Folder Structure

flatten-unique/
│
├── flattenUnique.js
├── flattenUnique.test.js
└── README.md

---

# Solutions Implemented

---

## 1. flattenUnique

* Uses reduce() with recursion to flatten
* Uses Set to remove duplicates
* Spread operator to convert Set back to array

---

# Concepts Practiced

* Recursion
* Array.reduce()
* Array.isArray()
* Set data structure
* Spread operator

---

# Time Complexity

O(n)

Where n is the total number of elements in all nested arrays.

---

# Author

Angel Andrei Espiritu Pacheco