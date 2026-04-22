# Is Subsequence

This exercise checks if a string is a subsequence of another string using the two pointers technique.

---

# Problem

Given two strings s and t, return true if s is a subsequence of t, false otherwise.

A subsequence is a sequence that can be derived from another sequence by deleting some elements without changing the order of the remaining elements.

---

### Example

Input:

isSubsequenceByFor("abc", "ahbgdc")

Output:

true

Explanation:
"abc" can be found in "ahbgdc" in order: a → b → c

---

# Folder Structure

is-subsequence/
│
├── isSubsequence.js
├── isSubsequence.test.js
└── README.md

---

# Solutions Implemented

---

## 1. isSubsequenceByFor

* Uses a single pointer for string s
* Iterates through string t with a for loop
* Advances pointer when characters match
* Returns true when all characters of s are found

## 2. isSubsequenceByTwoPointers

* Uses two pointers (i for s, j for t)
* While loop continues until either string is exhausted
* Moves pointers accordingly
* Returns true if i reached end of s

---

# Concepts Practiced

* Two Pointers technique
* String traversal
* Subsequence checking

---

# Time Complexity

O(n + m)

Where n is the length of string t and m is the length of string s.

---

# Space Complexity

O(1)

Constant space used.

---

# Author

Angel Andrei Espiritu Pacheco