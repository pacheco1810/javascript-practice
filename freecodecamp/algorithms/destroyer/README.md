# Destroyer

This exercise removes specified values from an array.

---

# Problem

Given an array and additional arguments, return a new array that contains only the elements that are not equal to any of the additional arguments.

* The additional arguments are variable in number
* The original array should not be mutated

---

### Example

Input:

destroyer([1, 2, 3, 1, 2, 3], 2, 3)

Output:

[1, 1]

---

# Folder Structure

destroyer/
│
├── destroyer.js
├── destroyer.test.js
└── README.md

---

# Solutions Implemented

---

## 1. destroyer (Rest + Filter + Includes)

* Uses rest parameter to capture values to remove
* Uses filter to keep elements not in removal list
* Uses includes() for checking existence

## 2. destroyerBySet (Set + Filter)

* Uses rest parameter to capture values to remove
* Converts removal values to a Set for O(1) lookup
* Uses filter with has() method for efficiency

Purpose:
Practice rest parameters, filtering, and algorithm optimization.

---

# Concepts Practiced

* Rest parameters (...rest)
* Array methods (filter)
* Set data structure
* includes() vs Set.has()
* Functional programming

---

# Time Complexity

* destroyer: O(n × m)
* destroyerBySet: O(n + m)

Where n is the length of the array and m is the number of values to remove.

---

# Author

Angel Andrei Espiritu Pacheco