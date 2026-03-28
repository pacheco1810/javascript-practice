# Convert HTML

This exercise converts special HTML characters to their corresponding HTML entities.

---

# Problem

Create a function that converts the following characters in a string to their HTML entities:

* & → &amp;
* < → &lt;
* > → &gt;
* " → &quot;
* ' → &apos;

All other characters should remain unchanged.

---

### Example

Input:

convertHTML("Dolce & Gabbana")

Output:

"Dolce &amp; Gabbana"

---

# Folder Structure

convert-html/
│
├── convertHTML.js
├── convertHTML.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Convert HTML with Object Map

* Uses an object as a lookup table for HTML entities
* Iterates through the string character by character
* Replaces special characters with their entity equivalents

Purpose:
Practice object lookups, string iteration, and character replacement.

---

# Concepts Practiced

* Objects as lookup tables (hash maps)
* For loops
* String iteration
* Conditional statements
* String concatenation

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Author

Angel Andrei Espiritu Pacheco