# Almost Palindrome

This exercise checks if a string can become a palindrome by deleting at most one character using the two pointers technique.

---

# Problem

Given a string, determine if it can be a palindrome by removing at most one character.

* A palindrome reads the same forward and backward
* You can delete zero or one character
* Return true if possible, false otherwise

---

### Example

Input:

isAlmostPalindrome("abca")

Output:

true

Explanation:
Remove "b" → "aca" (palindrome)
or remove "c" → "aba" (palindrome)

---

# Folder Structure

almost-palindrome/
│
├── almostPalindrome.js
├── almostPalindrome.test.js
└── README.md

---

# Solutions Implemented

---

## 1. isPalindrome

* Helper function that checks if a substring is palindrome
* Uses two pointers (left and right)

## 2. isAlmostPalindrome

* First checks if the string is already palindrome
* Uses two pointers to find first mismatch
* When mismatch found, checks if skipping left OR skipping right creates a palindrome

---

# Concepts Practiced

* Two Pointers technique
* Palindrome checking
* Recursive helper function
* Edge case handling

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Space Complexity

O(1)

Constant space used.

---

# Author

Angel Andrei Espiritu Pacheco