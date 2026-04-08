# User Analytics

This exercise analyzes user data to group active users by age and find the most common age among active users.

---

# Problem

Given an array of user objects with id, name, age, and active properties:

* Filter active users
* Group them by age with names as values
* Find the most common age among active users

---

### Example

Input:

users = [
  { id: 1, name: "Juan", age: 25, active: true },
  { id: 2, name: "Maria", age: 30, active: false },
  { id: 3, name: "Pedro", age: 22, active: true },
  { id: 4, name: "Ana", age: 30, active: true },
  { id: 5, name: "Luis", age: 25, active: false }
]

Output (getMostCommonActiveAge):
25

Output (groupActiveUsersByAge):
{
  25: ["Juan"],
  22: ["Pedro"],
  30: ["Ana"]
}

---

# Folder Structure

user-analytics/
│
├── userAnalytics.js
├── userAnalytics.test.js
└── README.md

---

# Solutions Implemented

---

## 1. groupActiveUsersByAge

* Filters active users with filter()
* Uses reduce() to group by age
* Accumulates names in arrays using spread operator

## 2. getMostCommonActiveAge

* Filters active users
* Uses reduce() to track count per age
* Keeps track of maximum count and corresponding age

---

# Concepts Practiced

* Array methods (filter, reduce)
* Object accumulation
* Spread operator
* Conditional logic
* Data aggregation

---

# Time Complexity

O(n)

Where n is the number of users.

---

# Author

Angel Andrei Espiritu Pacheco