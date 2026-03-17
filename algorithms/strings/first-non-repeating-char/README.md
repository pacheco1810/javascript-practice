# First Non-Repeating Character

This exercise implements different approaches to find the **first character in a string that does not repeat**.

---

# Problem

Given a string, return the **first character that appears only once**.

If every character repeats, return `null`.

### Example

Input:
```
"swiss"
```

Output:
```
"The first letter not repeating is: w"
```

Explanation:

* `s` repeats
* `w` appears once → first non-repeating character

---

# Folder Structure

```
first-non-repeating-char/
│
├── firstNonRepeating.js        # Implementations of the algorithm
├── firstNonRepeating.test.js   # Unit tests for all solutions
└── README.md                   # Documentation for the exercise
```

This structure keeps the **algorithm implementation**, **tests**, and **documentation** organized in a single directory.

---

# Solutions Implemented

This exercise includes **three different implementations** of the same algorithm to practice different programming styles and algorithmic approaches.

---

## 1. Classic Algorithm (Nested Loops)

This solution focuses on **pure algorithmic logic** without using helper data structures.

Characteristics:

* Iterates through each character
* Compares it with every other character
* Stops early if a duplicate is found
* Returns the first character that never repeats

Purpose:

Practice **nested loops**, **comparison logic**, and **algorithm efficiency improvements** such as early termination (`break`).

---

## 2. Frequency Counter Approach

This version uses a **frequency map (object)** to count how many times each character appears.

Steps:

1. Traverse the string and store the count of each character.
2. Traverse the string again.
3. Return the first character whose frequency equals `1`.

Purpose:

Practice a common interview technique called **Frequency Counter Pattern**.

---

## 3. Functional JavaScript Solution

This implementation uses **modern JavaScript array methods**.

Flow:

```
string
 ↓
split("")
 ↓
filter(unique characters)
 ↓
get first result
```

Purpose:

Demonstrate a **concise functional programming style** using:

* `split()`
* `find()`
* `indexOf()`
* `lastIndexOf()`

---

# Tests

This exercise includes **automated unit tests** to validate that all implementations behave correctly.

The tests verify cases such as:

* A normal string with repeated characters
* Strings where all characters repeat
* Single-character strings
* Strings with multiple unique characters

Run tests with:

```
npm test
```

All solutions are tested to ensure they produce **the same correct result**.

---

# Concepts Practiced

* String manipulation
* Nested loops
* Frequency counters
* Array methods
* Functional programming
* Algorithmic problem solving
* Writing automated tests

---

# Time Complexity

### Classic Solution

O(n²)

Each character may be compared with every other character.

### Frequency Counter

O(n)

Two passes through the string.

### Functional Method

Approximately O(n²)

Due to repeated calls to `indexOf()` and `lastIndexOf()`.

---

# Author

Angel Andrei Espiritu Pacheco
