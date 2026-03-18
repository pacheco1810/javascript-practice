# Transform & Aggregate Users

This exercise implements different approaches to process and transform an array of user objects using higher-order functions.

---

# Problem

Given an array of user objects, return an object that contains:

* The total age of active users
* An array with the names of active users in uppercase

---

### Example

Input:

[
{ name: "Angel", age: 23, active: true },
{ name: "Juan", age: 30, active: false },
{ name: "Ana", age: 25, active: true }
]

Output:

{
totalAge: 48,
activeNames: ["ANGEL", "ANA"]
}

---

# Folder Structure

transform-users/
│
├── transformUsers.js
├── transformUsers.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Classic + forEach

* Iterates manually using `forEach`
* Applies conditions
* Builds results step by step

Purpose:
Practice iteration and state management.

---

## 2. map + forEach

* Uses `map` to transform names
* Uses `forEach` to calculate total age

Purpose:
Practice combining multiple array methods.

---

## 3. Functional Approach (reduce)

* Uses `reduce` to compute everything in one pass
* Builds the final object directly

Purpose:
Master functional programming and data aggregation.

---

# Concepts Practiced

* Arrays of objects
* map
* forEach
* reduce
* Callbacks
* Data transformation
* Aggregation patterns

---

# Time Complexity

O(n)

Where n is the number of users.

---

# Author

Angel Andrei Espiritu Pacheco
