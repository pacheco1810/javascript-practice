# Analyze Text

This exercise analyzes text to count word frequency and find the most frequent words.

---

# Problem

Given a string of text, create a function that:

* Counts how many times each word appears (case-insensitive)
* Finds the most frequent word(s)
* Returns the number of unique words

---

### Example

Input:

analyzeText("Hello world hello WORLD test Test")

Output:

{
  wordCount: { hello: 2, world: 1, test: 2 },
  mostFrequent: ["hello", "test"],
  uniqueWords: 3
}

---

# Folder Structure

analyze-text/
│
├── analyzeText.js
├── analyzeText.test.js
└── README.md

---

# Solutions Implemented

---

## 1. analyzeText

* Converts text to lowercase for case-insensitive comparison
* Trims and splits text into words array
* Uses reduce() to count word frequency
* Uses reduce() with Object.entries() to find most frequent words
* Returns object with wordCount, mostFrequent, and uniqueWords

---

# Concepts Practiced

* String methods (toLowerCase, trim, split)
* Array methods (reduce)
* Object methods (Object.entries, Object.keys)
* Nullish coalescing operator (??)
* Case-insensitive comparison

---

# Time Complexity

O(n)

Where n is the number of words in the text.

---

# Author

Angel Andrei Espiritu Pacheco