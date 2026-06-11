# Spinal Case

This exercise converts a string to spinal case using regular expressions.

---

# Problem

Create a function that converts a string to spinal case.

Spinal case means all lowercase words joined by hyphens.

The function should handle:

* Spaces (converted to hyphens)
* Underscores (converted to hyphens)
* CamelCase (insert hyphen between words)
* Existing hyphens (preserved and converted to lowercase)

---

### Example

Input:

spinalCase("thisIsSpinalTap")

Output:

"this-is-spinal-tap"

---

# Folder Structure

spinal-case/
│
├── spinalCase.js
├── spinalCase.test.js
└── README.md

---

# Regex Pattern

## Step 1: Handle CamelCase
/([a-z])([A-Z])/g

| Component | Description |
|-----------|-------------|
| ([a-z]) | Captures a lowercase letter |
| ([A-Z]) | Captures an uppercase letter |
| $1-$2 | Replaces with lowercase + hyphen + uppercase |

## Step 2: Handle spaces and underscores
/[\s_]/g

| Component | Description |
|-----------|-------------|
| [\s_] | Matches any space or underscore |
| g | Global flag |

---

# Concepts Practiced

* Regular expressions
* Capturing groups
* Character classes
* String replacement
* CamelCase conversion

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Author

Angel Andrei Espiritu Pacheco