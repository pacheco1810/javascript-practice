# Count Words

This exercise implements different approaches to count how many times each word appears in a given string.

---

# Problem

Given a string containing multiple words separated by spaces, return an object where:

* Each key is a word
* Each value is the number of times that word appears

---

### Example

Input:

"hello world hello"

Output:

{
hello: 2,
world: 1
}

---

# Folder Structure

count-words/
│
├── countWords.js
├── countWords.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Classic Loop (Algorithmic Approach)

* Iterates manually through the string
* Builds words character by character
* Stores them in an object

Purpose:
Practice low-level string manipulation and control flow.

---

## 2. forEach Loop

* Splits the string into an array
* Uses `forEach` to iterate
* Updates a counter object

Purpose:
Practice array iteration and object manipulation.

---

## 3. Functional Approach (reduce)

* Uses `split` and `reduce`
* Builds the object in a functional style

Purpose:
Practice higher-order functions and functional programming.

---

# Concepts Practiced

* String manipulation
* Arrays
* Objects as hash maps
* forEach
* reduce
* Algorithmic thinking

---

# Time Complexity

O(n)

Where n is the number of words in the string.

---

# Author

Angel Andrei Espiritu Pacheco
