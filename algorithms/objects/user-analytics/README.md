# User Analytics

This exercise analyzes user data to group active users by age, find the most common age, get inactive users, group by status, and get age statistics.

---

# Problem

Given an array of user objects with id, name, age, and active properties:

* Group active users by age with names as values
* Find the most common age among active users
* Get names of inactive users
* Group users by active status
* Get statistics (active/inactive count per age)

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

Output (getAgeStats):
{
  25: { active: 1, inactive: 1 },
  30: { active: 1, inactive: 1 },
  22: { active: 1, inactive: 0 }
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
* Keeps track of maximum count

## 3. getInactiveUserNames

* Filters inactive users
* Maps to get names only

## 4. groupUsersByActiveStatus

* Uses reduce() to separate active and inactive users
* Returns object with two arrays

## 5. getAgeStats

* Uses reduce() with destructuring
* Uses nullish coalescing assignment (??=)
* Tracks active/inactive count per age

## 6. getTopActiveUsersByAge

* Filters only active users
* Groups by age with names array and total count
* Returns object with age as key and {names, total} as value

---

# Concepts Practiced

* Array methods (filter, map, reduce)
* Object destructuring
* Nullish coalescing assignment (??=)
* Spread operator
* Data aggregation

---

# Time Complexity

O(n)

Where n is the number of users.

---

# Author

Angel Andrei Espiritu Pacheco