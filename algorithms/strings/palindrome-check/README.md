# Palindrome Check

This exercise implements different approaches to determine whether a string is a **palindrome**.

A palindrome is a word that reads the same **forward and backward**.

---

# Problem

Given a string, determine whether it is a palindrome.

Return `true` if the string reads the same forward and backward, otherwise return `false`.

### Example

Input:

```
"racecar"
```

Output:

```
true
```

Another example:

Input:

```
"hello"
```

Output:

```
false
```

Explanation:

* `"racecar"` reads the same in both directions.
* `"hello"` becomes `"olleh"` when reversed, which is different.

---

# Folder Structure

```
palindrome-check/
│
├── palindromeCheck.js          # Implementations of the algorithm
├── palindromeCheck.test.js     # Unit tests for all solutions
└── README.md              # Documentation for the exercise
```

This structure keeps the **algorithm implementation**, **tests**, and **documentation** organized in a single directory.

---

# Solutions Implemented

This exercise includes **three different implementations** of the same algorithm to practice different programming styles.

---

## 1. Classic Algorithm (Loop)

This version focuses on **manual string reversal using loops**.

Characteristics:

* Iterates through the string from end to beginning
* Builds a reversed string character by character
* Compares the reversed string with the original

Purpose:

Practice **loops**, **string indexing**, and **manual algorithm design**.

---

## 2. JavaScript Methods Approach

This solution uses **built-in JavaScript methods**.

Flow:

```
string
 ↓
split("")
 ↓
reverse()
 ↓
join("")
```

Purpose:

Demonstrate a **short and expressive functional approach** using:

* `split()`
* `reverse()`
* `join()`

---

## 3. Two Pointers Technique

This implementation uses the **two pointers technique**, which is very common in technical interviews.

Process:

* One pointer starts at the beginning of the string
* The other pointer starts at the end
* Characters are compared while moving toward the center

Example:

```
racecar
↑     ↑
```

If all pairs match, the string is a palindrome.

Purpose:

Practice **efficient comparison algorithms** used in many interview problems.

---

# Tests

This exercise includes **automated unit tests** to ensure all implementations return the correct result.

The tests verify cases such as:

* Valid palindromes
* Non-palindrome strings
* Single-character strings
* Edge cases

Run tests with:

```
npm test
```

All implementations are tested to confirm they behave consistently.

---

# Concepts Practiced

* String manipulation
* Loops
* Array methods
* Two pointers technique
* Algorithm design
* Writing automated tests

---

# Time Complexity

All implementations run in:

```
O(n)
```

Where **n** is the number of characters in the string.

---

# Author

Angel Andrei Espiritu Pacheco
