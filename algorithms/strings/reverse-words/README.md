# Reverse Words Algorithm

This exercise implements different approaches to reverse the characters of each word in a string while keeping the original word order.

## Problem

Given a string containing multiple words separated by spaces, return a new string where each word is reversed individually.

### Example

Input:
"hello world"


Output:
"olleh dlrow"


The order of the words must remain the same, but the characters inside each word should be reversed.

---

## Solutions Implemented

This file contains multiple implementations of the same algorithm using different programming styles.

### 1. Classic For Loop (Algorithmic Approach)

- Parses the string manually
- Builds each word character by character
- Reverses each word using nested loops
- Does not rely on built-in string methods like `split` or `reverse`

Purpose:
Practice low-level string manipulation and algorithmic thinking.

---

### 2. Loop-Based Approach

- Splits the string into an array of words
- Uses loops to iterate over each word
- Reverses each word manually

Purpose:
Practice iteration and array manipulation.

---

### 3. Functional Approach (Modern JavaScript)

- Uses `split`, `map`, and `join`
- Applies a transformation to each word

Example flow:

string
↓
split(" ")
↓
map(reverse word)
↓
join(" ")


Purpose:
Demonstrate a more concise and functional programming style.

---

## Concepts Practiced

- String manipulation
- Loops
- Arrays
- Functional programming
- Algorithmic problem solving

---

## Time Complexity

O(n)

Where **n** is the number of characters in the string.

---

## Author

Angel Andrei Espiritu Pacheco