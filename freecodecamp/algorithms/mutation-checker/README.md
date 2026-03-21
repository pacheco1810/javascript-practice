# 🔤 Mutation Checker

This exercise implements a function to determine if **all letters of one word exist in another word**.

---

# 📌 Problem

Given an array of two strings, return `true` if the first string contains **all the letters** of the second string.

The comparison should be **case-insensitive**.

---

## 🧪 Example

### Input

```id="y0o1t7"
["hello", "Hello"]
```

### Output

```id="zq3g8m"
true
```

### Explanation

* "hello" contains all letters from "hello"
* Case is ignored using lowercase conversion

---

# 📁 Folder Structure

```id="2u3zsm"
mutation-checker/
│
├── mutation.js        # Algorithm implementation
├── mutation.test.js   # Unit tests
└── README.md          # Documentation
```

---

# ⚙️ Solution Implemented

## 🟢 Iterative Approach (For Loop)

### ✔️ Approach

* Convert both words to lowercase
* Iterate through each character of the second word
* Check if it exists in the first word using `includes()`
* Return `false` if any character is missing

### 🎯 Purpose

Practice:

* String methods (`includes`, `toLowerCase`)
* Loops (`for`)
* Conditional logic

---

# 🧪 Tests

This exercise includes **unit tests** to validate correctness.

### ✔️ Test Cases

* Case-insensitive matches
* Missing characters
* Empty strings
* Invalid input

### ▶️ Run Tests

```id="a9z8qk"
npm test
```

---

# 🧠 Concepts Practiced

* String manipulation
* Iteration
* Conditional validation
* Case normalization

---

# ⏱️ Time Complexity

| Approach  | Complexity |
| --------- | ---------- |
| Iterative | O(n * m)   |

---

# ✍️ Author

**Angel Andrei Espiritu Pacheco**
