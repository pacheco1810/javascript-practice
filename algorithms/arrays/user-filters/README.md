# User Filters

This exercise implements various array manipulation functions to filter, transform, and group user data.

---

# Problem

Given an array of user objects with id, name, age, and active properties:

* Filter active users
* Get names of active users
* Filter adults (age >= 18) and format them as strings
* Group users by active status

---

### Example

Input:

users = [
  { id: 1, name: "Ana", age: 25, active: true },
  { id: 2, name: "Luis", age: 16, active: false },
  { id: 3, name: "Carlos", age: 30, active: true },
  { id: 4, name: "Marta", age: 15, active: true },
  { id: 5, name: "Sofía", age: 22, active: false }
]

Output (groupUsers):

{
  active: [
    { id: 1, name: "Ana", age: 25, active: true },
    { id: 3, name: "Carlos", age: 30, active: true },
    { id: 4, name: "Marta", age: 15, active: true }
  ],
  inactive: [
    { id: 2, name: "Luis", age: 16, active: false },
    { id: 5, name: "Sofía", age: 22, active: false }
  ]
}

---

# Folder Structure

user-filters/
│
├── userFilters.js
├── userFilters.test.js
└── README.md

---

# Solutions Implemented

---

## 1. filterUsersActive

* Uses filter() to return only users with active: true

## 2. getActiveUserNames

* Chains filter() and map() to get names of active users

## 3. filterUsersAdults

* Uses filter() with destructuring to get adults (age >= 18)
* Uses map() with destructuring to format output strings

## 4. groupUsers

* Uses reduce() to group users by active status
* Uses object destructuring and spread operator to preserve properties

---

# Concepts Practiced

* Array methods (filter, map, reduce)
* Object destructuring
* Spread operator
* Template literals
* Conditional (ternary) operator
* Functional programming

---

# Time Complexity

O(n)

Where n is the number of users.

---

# Author

Angel Andrei Espiritu Pacheco