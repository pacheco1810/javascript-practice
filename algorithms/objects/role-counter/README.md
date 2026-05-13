# Role Counter

This exercise counts users by role, groups user names by role, and filters users by role.

---

# Problem

Given an array of user objects with name and role properties:

* Count how many users have each role
* Group user names by their role
* Filter users by a specific role

---

### Example

Input:

users = [
  { name: "Juan", role: "admin" },
  { name: "Ana", role: "user" },
  { name: "Luis", role: "admin" },
  { name: "Maria", role: "user" },
  { name: "Pedro", role: "guest" }
]

Output (countRoles):
{ admin: 2, user: 2, guest: 1 }

Output (groupByRoles):
{ admin: ["Juan", "Luis"], user: ["Ana", "Maria"], guest: ["Pedro"] }

Output (filterByRole(users, "admin")):
[
  { name: "Juan", role: "admin" },
  { name: "Luis", role: "admin" }
]

---

# Folder Structure

role-counter/
│
├── roleCounter.js
├── roleCounter.test.js
└── README.md

---

# Functions Implemented

---

## 1. countRoles

* Uses reduce() to count occurrences of each role
* Returns object with role as key and count as value

## 2. groupByRoles

* Uses reduce() to group user names by role
* Returns object with role as key and array of names as value

## 3. filterByRole

* Uses filter() to return users matching the specified role
* Returns array of user objects

---

# Concepts Practiced

* Array reduce() method
* Array filter() method
* Object accumulation
* Data validation

---

# Time Complexity

O(n) for all functions

Where n is the length of the array.

---

# Author

Angel Andrei Espiritu Pacheco