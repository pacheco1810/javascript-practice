# DNA Pairing

This exercise pairs each DNA base with its complementary base.

---

# Problem

DNA strands consist of four bases: A, T, C, G.

Base pairing rules:
* A pairs with T
* T pairs with A
* C pairs with G
* G pairs with C

Given a DNA string, return an array of pairs where each element is an array [base, complement].

---

### Example

Input:

pairElement("ATCGA")

Output:

[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

---

# Folder Structure

dna-pairing/
│
├── dnaPairing.js
├── dnaPairing.test.js
└── README.md

---

# Solutions Implemented

---

## 1. DNA Pairing with Object Map

* Uses an object as a lookup table for base pairs
* Iterates through the string with a for loop
* Creates a 2D array with each base and its pair

Purpose:
Practice object lookups, string iteration, and array manipulation.

---

# Concepts Practiced

* Objects as lookup tables (hash maps)
* For loops
* String iteration
* 2D arrays
* Array push method

---

# Time Complexity

O(n)

Where n is the length of the DNA string.

---

# Author

Angel Andrei Espiritu Pacheco