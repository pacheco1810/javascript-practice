# Text Analyzer

This exercise implements functions to analyze arrays of words for palindromes and repeated phrases.

---

# Problem

Given arrays of words, analyze them to find:

* Palindromes (words that read the same forward and backward)
* Repeated phrases (sequences of consecutive words that appear more than once)

---

### Example

Input:

analyzeTexts([
  ["i", "love", "js", "i", "love", "js"],
  ["racecar", "level", "hello"]
], 2)

Output:

[
  { repeatedPhrases: [0, 3], palindromeBreaks: [] },
  { repeatedPhrases: [], palindromeBreaks: [2] }
]

Explanation:
- First text: phrase "i love" (2 words) appears at indices 0 and 3
- Second text: "hello" at index 2 is not a palindrome

---

# Folder Structure

text-analyzer/
│
├── textAnalyzer.js
├── textAnalyzer.test.js
└── README.md

---

# Solutions Implemented

---

## 1. isPalindrome

* Converts word to lowercase
* Reverses the string and compares

Purpose:
Practice string manipulation and palindrome checking.

---

## 2. findPalindromeBreaks

* Iterates through array
* Uses isPalindrome to check each word
* Returns indices of non-palindromes

Purpose:
Practice array iteration and conditional logic.

---

## 3. findRepeatedPhrases

* Uses reduce to build frequency counter for phrases
* Extracts phrases using slice and join
* Returns indices where phrases appear more than once

Purpose:
Practice reduce, object accumulation, and phrase detection.

---

## 4. analyzeTexts

* Maps over texts array
* Returns object with repeatedPhrases and palindromeBreaks

Purpose:
Practice array mapping and function composition.

---

# Concepts Practiced

* String methods (toLowerCase, split, reverse, join)
* Array methods (reduce, slice, map, sort)
* Palindrome checking
* Sliding window for phrase detection
* Frequency counting with hash maps

---

# Time Complexity

* isPalindrome: O(n)
* findPalindromeBreaks: O(n × m)
* findRepeatedPhrases: O(n × k)
* analyzeTexts: O(t × n × k)

Where n = word length, m = number of words, k = phraseLength, t = number of texts

---

# Author

Angel Andrei Espiritu Pacheco