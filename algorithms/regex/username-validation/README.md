# Username Validation

This exercise validates username format using regular expressions.

---

# Problem

Create a function that validates a username with the following rules:

* Must start with a letter (a-z or A-Z)
* Can contain letters, numbers, and underscores
* Total length between 3 and 15 characters

---

### Example

Input:

isValidUsername("Angel_23")

Output:

true

---

# Folder Structure

username-validation/
│
├── usernameValidation.js
├── usernameValidation.test.js
└── README.md

---

# Regex Pattern

/^[a-zA-Z]+\w{3,15}$/

| Component | Description |
|-----------|-------------|
| ^ | Start of string |
| [a-zA-Z]+ | One or more letters |
| \w{3,15} | 3 to 15 word characters (letters, numbers, underscore) |
| $ | End of string |

---

# Concepts Practiced

* Regular expressions
* Character classes
* Quantifiers
* String validation

---

# Author

Angel Andrei Espiritu Pacheco