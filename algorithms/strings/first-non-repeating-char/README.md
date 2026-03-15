# First Non-Repeating Character

## Description

This algorithm finds the **first character in a string that does not repeat**.

If every character appears more than once, the function returns `null`.

Example:

```
Input:  "swiss"
Output: "The first letter not repeating is: w"
```

---

## Problem

Given a string, return the **first character that appears only once**.

If no such character exists, return `null`.

---

## Solutions Implemented

This exercise includes **three different approaches** to solve the problem.

### 1. Classic Nested Loops

Uses two loops to compare each character with the rest of the string.

**Time Complexity:**
O(n²)

---

### 2. Frequency Counter (Object)

Counts how many times each character appears using a JavaScript object.

Then iterates through the string to find the first character with frequency `1`.

**Time Complexity:**
O(n)

---

### 3. Array Methods

Uses modern JavaScript array methods such as:

* `split()`
* `filter()`
* `indexOf()`
* `lastIndexOf()`

This approach is more **declarative and concise**.

---

## Example

```javascript
firstNonRepeatingClassic("swiss")
// "The first letter not repeating is:w"
```

```javascript
firstNonRepeatingClassic("aabbcc")
// null
```

---

## Running Tests

This project uses **Jest** for testing.

To run the tests:

```
npm test
```

Example output:

```
PASS firstNonRepeating.test.js
✓ firstNonRepeatingClassic works with swiss
✓ firstNonRepeatingClassic returns null when all repeat
✓ firstNonRepeatingClassic works with single character
```

---

## Folder Structure

```
first-non-repeating-char
│
├── first-non-repeating-char.js
├── firstNonRepeating.test.js
└── README.md
```

---

## Learning Goals

This exercise practices:

* String manipulation
* Algorithmic thinking
* Time complexity analysis
* Multiple approaches to the same problem
* Writing automated tests
