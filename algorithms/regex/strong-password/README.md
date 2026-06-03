# Strong Password

This exercise validates strong passwords using regular expressions with lookahead assertions.

---

# Problem

Create a function that validates a password with the following rules:

* At least 8 characters long
* Contains at least one uppercase letter (A-Z)
* Contains at least one lowercase letter (a-z)
* Contains at least one number (0-9)

---

### Example

Input:

isStrongPassword("Hello123")

Output:

true

---

# Folder Structure

strong-password/
│
├── strongPassword.js
├── strongPassword.test.js
└── README.md

---

# Regex Pattern

/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/

| Component | Description |
|-----------|-------------|
| ^ | Start of string |
| (?=.*[A-Z]) | Lookahead for at least one uppercase |
| (?=.*[a-z]) | Lookahead for at least one lowercase |
| (?=.*[0-9]) | Lookahead for at least one digit |
| .{8,} | Any character, at least 8 times |
| $ | End of string |

---

# Concepts Practiced

* Regular expressions
* Lookahead assertions
* Password validation
* Character classes

---

# Author

Angel Andrei Espiritu Pacheco