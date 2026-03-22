# 📊 Largest Numbers in Sub-Arrays

This exercise implements a function to find the **largest number in each sub-array**.

---

# 📌 Problem

Given an array of arrays, return a new array containing the **largest number from each sub-array**.

---

## 🧪 Example

### Input

```id="a1b2c3"
[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
```

### Output

```id="d4e5f6"
[5, 27, 39, 1001]
```

### Explanation

* First array → max is 5
* Second → 27
* Third → 39
* Fourth → 1001

---

# 📁 Folder Structure

```id="g7h8i9"
largest-of-all/
│
├── largestOfAll.js        # Algorithm implementation
├── largestOfAll.test.js   # Unit tests
└── README.md              # Documentation
```

---

# ⚙️ Solution Implemented

## 🟢 Nested Loop Approach

### ✔️ Approach

* Loop through each sub-array
* Assume first element is the largest
* Compare with the rest of elements
* Store the largest value in a result array

### 🎯 Purpose

Practice:

* Nested loops
* Array traversal
* Comparison logic

---

# 🧪 Tests

This exercise includes **unit tests** to validate correctness.

### ✔️ Test Cases

* Normal arrays
* Arrays with negative numbers
* Single element arrays
* Invalid input

### ▶️ Run Tests

```id="j1k2l3"
npm test
```

---

# 🧠 Concepts Practiced

* Arrays of arrays
* Nested loops
* Data comparison
* Problem solving

---

# ⏱️ Time Complexity

| Approach     | Complexity |
| ------------ | ---------- |
| Nested Loops | O(n * m)   |

---

# ✍️ Author

**Angel Andrei Espiritu Pacheco**
