# Contains Value

This exercise checks if an array contains a specific value using different approaches.

---

# Problem

Given an array and a value, return true if the value exists in the array, false otherwise.

* Works with different data types
* Returns boolean result

---

### Example

Input:

containsWithFilter([10, 20, 30], 50)

Output:

false

---

# Folder Structure

contains-value/
│
├── containsValue.js
├── containsValue.test.js
└── README.md

---

# Solutions Implemented

---

## 1. containsWithFor

* Uses for...of loop to iterate through array
* Returns true immediately when value is found

## 2. contains

* Uses built-in includes() method
* Most concise solution

## 3. containsWithFilter

* Uses filter() to create array of matching values
* Checks if filtered array length > 0

---

# Concepts Practiced

* Array iteration
* For...of loop
* Array methods (includes, filter)
* Boolean logic

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Author

Angel Andrei Espiritu Pacheco