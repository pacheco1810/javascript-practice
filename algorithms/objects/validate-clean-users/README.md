# Validate & Clean Users

This exercise focuses on validating and cleaning user data using modern JavaScript methods.

---

# Problem

Given an array of user objects, perform the following:

1. Remove users with invalid emails
2. Clean emails (remove extra spaces)
3. Convert emails to lowercase
4. Check if all users are active
5. Check if at least one user is admin

---

### Example

Input:

[
{ email: "  [ANGEL@mail.com](mailto:ANGEL@mail.com) ", active: true, role: "admin" },
{ email: "[juan@mail.com](mailto:juan@mail.com)", active: true, role: "user" },
{ email: "invalidEmail", active: false, role: "user" }
]

---

Output:

{
cleanedUsers: [
{ email: "[angel@mail.com](mailto:angel@mail.com)", active: true, role: "admin" },
{ email: "[juan@mail.com](mailto:juan@mail.com)", active: true, role: "user" }
],
allActive: true,
hasAdmin: true
}

---

# Folder Structure

validate-clean-users/
│
├── validateUsers.js
├── validateUsers.test.js
└── README.md

---

# Concepts Practiced

* map
* filter
* replace
* every
* some
* Data validation
* Data transformation

---

# Author

Angel Andrei Espiritu Pacheco
