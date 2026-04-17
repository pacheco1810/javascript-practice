# Group Anagrams

This exercise groups words that are anagrams of each other.

---

# Problem

Given an array of strings, group words that are anagrams together.

* An anagram is a word formed by rearranging the letters of another word
* The order of groups doesn't matter
* The order of words within a group doesn't matter
* Case-insensitive comparison

---

### Example

Input:

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])

Output:

[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

---

# Folder Structure

group-anagrams/
│
├── groupAnagrams.js
├── groupAnagrams.test.js
└── README.md

---

# Solutions Implemented

---

## 1. groupAnagrams

* Uses reduce() to build an object
* Creates a key by sorting the letters of each word
* Groups words with the same sorted key
* Returns Object.values() to get the groups

---

# Concepts Practiced

* String methods (toLowerCase, split, join)
* Array methods (reduce, sort)
* Object as hash map
* Anagrams concept

---

# Time Complexity

O(n × k log k)

Where n is the number of words and k is the maximum length of a word.

---

# Author

Angel Andrei Espiritu Pacheco