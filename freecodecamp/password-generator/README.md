# Password Generator

This exercise generates a random password of a specified length using alphanumeric characters and special symbols.

---

# Problem

Create a function that generates a random password with the following requirements:

* Password length is specified by the user
* Characters include:
  * Uppercase letters (A-Z)
  * Lowercase letters (a-z)
  * Numbers (0-9)
  * Special characters (!@#$%^&*())
* Each character is randomly selected

---

### Example

Input:

generatePassword(5)

Output:

"aB3!x" (random, changes each time)

---

# Folder Structure

password-generator/
│
├── passwordGenerator.js
├── passwordGenerator.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Password Generator with While Loop

* Uses a while loop to build the password character by character
* Randomly selects characters from a predefined string
* Uses Math.random() and Math.floor() for random index selection

Purpose:
Practice random number generation, string manipulation, and loops.

---

# Concepts Practiced

* While loops
* Math.random()
* Math.floor()
* String concatenation
* Random index selection
* Character sets

---

# Time Complexity

O(n)

Where n is the desired password length.

---

# Author

Angel Andrei Espiritu Pacheco