# Reverse Words Algorithm

This exercise implements different approaches to reverse the characters of each word in a string while keeping the original word order.

---

# Problem

Given a string containing multiple words separated by spaces, return a new string where each word is reversed individually.

### Example

Input:

```
"hello world"
```

Output:

```
"olleh dlrow"
```

The order of the words must remain the same, but the characters inside each word should be reversed.

---

# Folder Structure

```
reverse-words/
│
├── reverseWords.js        # Implementations of the algorithm
├── reverseWords.test.js   # Unit tests for all solutions
└── README.md              # Documentation for the exercise
```

This structure keeps the algorithm implementation, tests, and documentation organized in a single directory.

---

# Solutions Implemented

This exercise includes **three different implementations** of the same algorithm to practice different programming styles and levels of abstraction.

## 1. Classic Algorithm (No Built-in Methods)

This version focuses on **pure algorithmic logic**.

Characteristics:

* Parses the string manually
* Builds words character by character
* Uses nested loops to reverse each word
* Avoids built-in helpers like `split()` or `reverse()`

Purpose:

Practice **low-level string manipulation** and **algorithmic thinking**, which is useful for coding interviews.

---

## 2. Loop-Based Solution

This approach uses **basic JavaScript helpers combined with loops**.

Steps:

1. Split the string into words
2. Iterate through each word
3. Reverse the characters manually

Purpose:

Practice **arrays**, **loops**, and **intermediate algorithm design**.

---

## 3. Functional JavaScript Solution

This implementation uses **modern JavaScript array methods**.

Flow:

```
string
 ↓
split(" ")
 ↓
map(reverse each word)
 ↓
join(" ")
```

Purpose:

Demonstrate a **clean and expressive functional programming style** using:

* `split()`
* `map()`
* `reverse()`
* `join()`

---

# Tests

This exercise includes **automated unit tests** using **Jest** to validate that all implementations behave correctly.

Each solution is tested against multiple scenarios, including:

* Normal strings
* Strings with repeated characters
* Edge cases like single characters
* Strings where no transformation is needed

Run tests with:

```
npm test
```

---

# Concepts Practiced

* String manipulation
* Algorithm design
* Loops
* Arrays
* Functional programming
* Writing unit tests
* Test automation

---

# Time Complexity

O(n)

Where **n** is the number of characters in the input string.

---

# Author

Angel Andrei Espiritu Pacheco
