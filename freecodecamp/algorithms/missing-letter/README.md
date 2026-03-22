# 🔤 Missing Letter Finder

This exercise implements a function to find the **missing letter in a consecutive alphabetical sequence**.

---

# 📌 Problem

Given a string of consecutive letters, return the **missing letter** in the sequence.

### Rules:

* If all letters are present → return `undefined`
* Letters are always in alphabetical order

---

## 🧪 Example

### Input

```id="a8s7d6"
"abce"
```

### Output

```id="f5g4h3"
"d"
```

### Explanation

* Sequence should be: a → b → c → d → e
* The missing letter is `"d"`

---

## 🧪 Example 2

### Input

```id="j2k3l4"
"abcdefghijklmnopqrstuvwxyz"
```

### Output

```id="m5n6o7"
undefined
```

---

# 📁 Folder Structure

```id="p8q9r0"
missing-letter/
│
├── fearNotLetter.js        # Algorithm implementation
├── fearNotLetter.test.js   # Unit tests
└── README.md               # Documentation
```

---

# ⚙️ Solution Implemented

## 🟢 Character Code Comparison (For Loop)

### ✔️ Approach

* Loop through the string
* Compare each letter with the next using `charCodeAt`
* If difference is not `1`, a letter is missing
* Return the missing letter using `String.fromCharCode`

### 🎯 Purpose

Practice:

* ASCII / Unicode manipulation
* Loops
* Sequential logic

---

# 🧪 Tests

This exercise includes **unit tests** to validate correctness.

### ✔️ Test Cases

* Missing letter in middle
* No missing letters
* Short sequences

### ▶️ Run Tests

```id="s1t2u3"
npm test
```

---

# 🧠 Concepts Practiced

* String manipulation
* Character codes
* Sequential validation
* Loop logic

---

# ⏱️ Time Complexity

| Approach  | Complexity |
| --------- | ---------- |
| Iterative | O(n)       |

---

# ✍️ Author

**Angel Andrei Espiritu Pacheco**
