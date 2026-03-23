# Franken Splice

This exercise implements a function that **inserts all elements of one array into another at a specific index without modifying the original arrays**.

---

# Problem

Given two arrays and an index, insert all elements of the first array into the second array at the specified index.

The original arrays **must not be modified**.

### Example

Input:

```
arr1 = [1, 2, 3, 4]
arr2 = []
index = 0
```

Output:

```
[1, 2, 3, 4]
```

Explanation:

* A copy of `arr2` is created
* Elements from `arr1` are inserted starting at index `0`
* The original arrays remain unchanged

---

# Folder Structure

```
franken-splice/
│
├── frankenSplice.js        # Algorithm implementation
├── frankenSplice.test.js   # Unit tests
└── README.md               # Documentation
```

This structure keeps the **algorithm implementation**, **tests**, and **documentation** organized in a single directory.

---

# Solution Implemented

This solution uses a combination of:

* `slice()` to copy the array
* `splice()` to insert elements at a specific position

---

## Algorithm (Slice + Splice)

Steps:

1. Create a copy of the second array using `slice()`.
2. Iterate through the first array.
3. Insert each element into the copied array using `splice()`.
4. Adjust the index dynamically using `indice + i`.
5. Return the resulting array.

Purpose:

Practice:

* Array copying (`slice`)
* Array mutation (`splice`)
* Index manipulation
* Loop-based insertion

---

# Tests

This exercise includes **automated unit tests** to validate correct behavior.

The tests verify cases such as:

* Normal insertion
* Insertion into empty arrays
* Edge cases with index values

Run tests with:

```
npm test
```

---

# Concepts Practiced

* Array manipulation
* slice vs splice
* Index shifting
* Loop logic
* Avoiding mutation of original arrays

---

# Time Complexity

### Solution

O(n + m)

Where:

* `n` = length of arr1
* `m` = length of arr2

---

# Author

Angel Andrei Espiritu Pacheco
