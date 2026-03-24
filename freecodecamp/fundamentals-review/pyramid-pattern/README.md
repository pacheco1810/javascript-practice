# Pyramid

This exercise generates a pyramid shape with a given character, number of rows, and orientation.

---

# Problem

Create a function that prints a pyramid:

* Each row contains 2 * rowNumber - 1 characters
* Rows are centered with spaces
* The pyramid starts and ends with a newline character
* If invertida = false: vertex points up (pyramid)
* If invertida = true: vertex points down (inverted pyramid)

---

### Example

Input:

pyramid("p", 5, true);

Output:

p
ppp
ppppp
ppppppp
ppppppppp

---

# Folder Structure

pyramid/
│
├── pyramid.js
├── pyramid.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Pyramid Generator

* Uses a for loop to iterate through rows
* Calculates the level based on orientation
* Adds spaces and characters with String.repeat()

Purpose:
Practice loops, conditionals, string manipulation, and algorithm design.

---

# Concepts Practiced

* String manipulation
* Loops (for)
* Conditionals (ternary operator)
* String.repeat()
* Algorithmic thinking

---

# Time Complexity

O(n²)

Where n is the number of rows. Each row prints up to 2n - 1 characters.

---

# Author

Angel Andrei Espiritu Pacheco