# Group By

This exercise implements different approaches to group elements of an array based on a specific property.

---

# Problem

Given an array of objects, group the elements by a specified key.

The result should be an object where:

* Each key represents a group
* Each value is an array of elements that belong to that group

---

### Example

Input:

[
{ name: "Angel", role: "admin" },
{ name: "Juan", role: "user" },
{ name: "Ana", role: "admin" }
]

Output:

{
admin: ["Angel", "Ana"],
user: ["Juan"]
}

---

# Folder Structure

group-by/
│
├── groupBy.js
├── groupBy.test.js
└── README.md

---

# Solutions Implemented

---

## 1. Classic Loop (Algorithmic Approach)

* Iterates manually through the array
* Builds the object step by step
* Uses conditionals to create and update groups

Purpose:
Practice control flow and object manipulation.

---

## 2. forEach Loop

* Uses `forEach` for iteration
* Groups elements dynamically

Purpose:
Practice array iteration and grouping logic.

---

## 3. Functional Approach (reduce)

* Uses `reduce` to build the grouped object in a single pass

Purpose:
Master data aggregation and functional programming.

---

# Concepts Practiced

* Arrays of objects
* Object manipulation
* Dynamic keys
* forEach
* reduce
* Data grouping patterns

---

# Time Complexity

O(n)

Where n is the number of elements in the array.

---

# Author

Angel Andrei Espiritu Pacheco
