# 🔁 Repeat String

This exercise implements a function to **repeat a string a given number of times**.

---

# 📌 Problem

Given a string and a number, return a new string that repeats the original string **`num` times**.

### Rules:

* If `num` is **less than or equal to 0**, return an empty string `""`

---

## 🧪 Example

### Input

```id="a1b2c3"
repeatStringNumTimes("abc", 3)
```

### Output

```id="d4e5f6"
"abcabcabc"
```

### Explanation

* The string `"abc"` is repeated **3 times**

---

## 🧪 Example 2

### Input

```id="g7h8i9"
repeatStringNumTimes("abc", -2)
```

### Output

```id="j1k2l3"
""
```

---

# 📁 Folder Structure

```id="m4n5o6"
repeat-string/
│
├── repeatString.js        # Algorithm implementation
├── repeatString.test.js   # Unit tests
└── README.md              # Documentation
```

---

# ⚙️ Solution Implemented

## 🟢 Iterative Approach (For Loop)

### ✔️ Approach

* Check if `num` is less than or equal to 0 → return `""`
* Store original string
* Use a loop to concatenate the string multiple times

### 🎯 Purpose

Practice:

* Loops (`for`)
* String concatenation
* Conditional logic

---

# 🧪 Tests

This exercise includes **unit tests** to validate correctness.

### ✔️ Test Cases

* Normal repetition
* Zero repetitions
* Negative numbers
* Empty string

### ▶️ Run Tests

```id="p7q8r9"
npm test
```

---

# 🧠 Concepts Practiced

* String manipulation
* Iteration
* Conditional logic

---

# ⏱️ Time Complexity

| Approach  | Complexity |
| --------- | ---------- |
| Iterative | O(n)       |

---

# ✍️ Author

**Angel Andrei Espiritu Pacheco**
