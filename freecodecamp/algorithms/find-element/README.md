# Find Element

This exercise implements a function that returns the **first element in an array that passes a truth test**.

---

# Problem

Given an array and a test function, return the **first element that satisfies the condition**.

If no element passes the test, return `undefined`.

### Example

Input:

```
[1, 3, 5, 9, 10]
```

Test function:

```
num => num % 2 === 0
```

Output:

```
10
```

Explanation:

* 1 → ❌ odd
* 3 → ❌ odd
* 5 → ❌ odd
* 9 → ❌ odd
* 10 → ✅ even → first match

---

# Folder Structure

```
find-element/
│
├── findElement.js        # Algorithm implementation
├── findElement.test.js   # Unit tests
└── README.md             # Documentation
```

This structure keeps the **algorithm implementation**, **tests**, and **documentation** organized in a single directory.

---

# Solution Implemented

This solution uses a **classic loop approach** to iterate through the array and apply the test function.

---

## Classic Algorithm (Loop)

Steps:

1. Iterate through the array using a `for` loop.
2. Apply the provided function (`func`) to each element.
3. If the function returns `true`, return that element immediately.
4. If no element passes the test, return `undefined`.

Purpose:

Practice:

* Higher-order functions
* Callback execution
* Early return pattern
* Loop-based searching

---

# Tests

This exercise includes **automated unit tests** to validate that the implementation behaves correctly.

The tests verify cases such as:

* A valid element exists
* No element satisfies the condition
* Empty array input

Run tests with:

```
npm test
```

---

# Concepts Practiced

* Higher-order functions
* Callbacks
* Array traversal
* Conditional logic
* Early return pattern

---

# Time Complexity

### Classic Solution

O(n)

In the worst case, the function checks all elements once.

---

# Author

Angel Andrei Espiritu Pacheco
