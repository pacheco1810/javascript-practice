# Adult Statistics

This exercise calculates statistics for adult users (age >= 18) using array methods.

---

# Problem

Given an array of user objects with name and age, create functions that:

* Filter users who are adults (age >= 18)
* Get the names of adult users
* Sum the ages of all adult users
* Get complete statistics: total adults, names list, and average age

---

### Example

Input:

users = [
  { name: "Juan", age: 17 },
  { name: "Ana", age: 22 },
  { name: "Luis", age: 30 },
  { name: "Maria", age: 22 }
]

Output (getAdultStats):
{ totalAdults: 3, names: ["Ana", "Luis", "Maria"], averageAge: 24.67 }

---

# Folder Structure

adult-stats/
│
├── adultStats.js
├── adultStats.test.js
└── README.md

---

# Solutions Implemented

---

## 1. getAdults

* Uses filter() to return users with age >= 18

## 2. getUserAdultsNames

* Chains filter() and map() to get names of adults

## 3. countAdultsAges

* Uses forEach to sum ages of adult users

## 4. getAdultStats

* Uses reduce() to calculate multiple statistics in one pass
* Returns totalAdults, names array, and average age

---

# Concepts Practiced

* Array methods (filter, map, forEach, reduce)
* Method chaining
* Object manipulation
* Floating point formatting (toFixed)

---

# Time Complexity

O(n)

Where n is the number of users.

---

# Author

Angel Andrei Espiritu Pacheco