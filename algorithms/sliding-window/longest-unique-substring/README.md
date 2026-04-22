# Longest Unique Substring

This exercise finds the length of the longest substring without repeating characters using the sliding window technique.

---

# Problem

Given a string, find the length of the longest substring that contains no repeating characters.

* The substring must be contiguous
* Characters are case-sensitive
* Empty string returns 0

---

### Example

Input:

longestUniqueSubstring("abcabcbb")

Explanation:
- "abc" → length 3
- "bca" → length 3
- "cab" → length 3
- "abc" → length 3

Output:

3

---

# Folder Structure

longest-unique-substring/
│
├── longestUniqueSubstring.js
├── longestUniqueSubstring.test.js
└── README.md

---

# Solutions Implemented

---

## 1. longestUniqueSubstring

* Uses sliding window technique with two pointers (left and right)
* Uses a Set to track characters in current window
* When duplicate found, moves left pointer past the duplicate
* Updates maxLength after each iteration

---

# Concepts Practiced

* Sliding window technique
* Two pointers
* Set data structure
* String iteration

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Space Complexity

O(min(n, alphabet_size))

---

# Author

Angel Andrei Espiritu Pacheco