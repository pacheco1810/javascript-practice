# Count Nested Items

This exercise counts the total number of non-array items in a nested array using recursion.

---

# Problem

Create a recursive function that:

* Takes a nested array as input
* Returns the total count of non-array elements

---

### Example

Input:

countNestedItems([1, [2, [3, 4]], 5])

Output:

5

Explanation:
Items: 1, 2, 3, 4, 5 → total 5 items

---

# Folder Structure

count-nested-items/
│
├── countNestedItems.js
├── countNestedItems.test.js
└── README.md

---

# Solutions Implemented

---

## 1. countNestedItems

* Uses reduce() with recursion
* Base case: empty array returns 0
* If item is array → recursively count its items
* If item is not array → add 1

---

# Concepts Practiced

* Recursion
* Array.reduce()
* Array.isArray()
* Ternary operator

---

# Time Complexity

O(n)

Where n is the total number of elements in all nested arrays.

---

# Author

Angel Andrei Espiritu Pacheco