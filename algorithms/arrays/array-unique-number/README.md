# Array Operations

This exercise implements various array operations using Sets.

---

# Problem

Create functions that:

* Remove duplicates from an array
* Check if an array has duplicates
* Find the first duplicate in an array
* Find the intersection of two arrays
* Find the symmetric difference of two arrays

---

### Example

Input:

getUniqueNumbers([1, 2, 2, 3, 3, 3])
hasDuplicates([1, 2, 2, 3])
getFirstDuplicate([2, 1, 3, 1, 2])
getArrayIntersection([1, 2, 3], [2, 3, 4])
getArrayDifference([1, 2, 3], [2, 3, 4])

Output:

[1, 2, 3]
true
1
[2, 3]
[1, 4]

---

# Folder Structure

array-operations/
│
├── arrayOperations.js
├── arrayOperations.test.js
└── README.md

---

# Solutions Implemented

---

## 1. getUniqueNumbers

* Uses Set to remove duplicates
* Spread operator to convert back to array

## 2. hasDuplicates

* Compares Set size with array length

## 3. getFirstDuplicate

* Uses Set to track seen numbers
* Returns first number already in Set

## 4. getArrayIntersection

* Converts second array to Set for O(1) lookup
* Filters first array and removes duplicates

## 5. getArrayDifference

* Combines elements in A not in B with elements in B not in A
* Uses Set to remove duplicates in result

---

# Concepts Practiced

* Set data structure
* Array methods (filter, includes)
* Spread operator
* Symmetric difference
* Intersection

---

# Time Complexity

O(n + m)

Where n and m are the lengths of the arrays.

---

# Author

Angel Andrei Espiritu Pacheco