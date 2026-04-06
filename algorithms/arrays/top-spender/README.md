# Top Spender

This exercise finds the user who spent the most money across multiple orders.

---

# Problem

Given an array of orders with user and total:

* Calculate total spent by each user
* Find the user with the highest total
* Handle ties (return all top spenders)

---

### Example

Input:

orders = [
  { id: 1, user: "Juan", total: 120 },
  { id: 2, user: "Maria", total: 80 },
  { id: 3, user: "Juan", total: 50 },
  { id: 4, user: "Pedro", total: 200 },
  { id: 5, user: "Maria", total: 150 }
]

Output:

"Maria"

---

# Folder Structure

top-spender/
│
├── topSpender.js
├── topSpender.test.js
└── README.md

---

# Solutions Implemented

---

## 1. calculateTotalSpentByUser

* Uses reduce() to aggregate totals by user
* Uses nullish coalescing operator (??) for default values

## 2. getTopSpender

* Calls calculateTotalSpentByUser
* Iterates with for...in to find maximum

## 3. getTopSpenderByReduce

* Single pass reduce to track totals and max
* Handles ties by returning all top spenders

---

# Concepts Practiced

* Array reduce() method
* Object aggregation
* For...in loop
* Nullish coalescing operator (??)
* Handling edge cases

---

# Time Complexity

O(n)

Where n is the number of orders.

---

# Author

Angel Andrei Espiritu Pacheco