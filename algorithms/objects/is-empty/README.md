# Is Empty

This exercise checks if an object is empty using different approaches.

---

# Problem

Given an object, return true if it has no enumerable properties, false otherwise.

* An empty object has no key-value pairs
* Returns boolean result

---

### Example

Input:

isEmptyByJSON({1:'a', 2:'b', 3:'c', 4:'d', 5:'e'})

Output:

false

---

# Folder Structure

is-empty/
│
├── isEmpty.js
├── isEmpty.test.js
└── README.md

---

# Solutions Implemented

---

## 1. isEmptyByFor

* Uses for...in loop to check if object has properties
* Returns false if any property is found

## 2. isEmptyByKeys

* Uses Object.keys() to get array of property names
* Checks if length is 0

## 3. isEmptyByJSON

* Converts object to JSON string
* Compares with '{}'

---

# Concepts Practiced

* Objects
* For...in loop
* Object.keys()
* JSON.stringify()
* Type checking

---

# Time Complexity

O(1) for isEmptyByKeys and isEmptyByJSON
O(n) for isEmptyByFor

Where n is the number of properties in the object.

---

# Author

Angel Andrei Espiritu Pacheco