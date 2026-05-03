# Find Missing Number

This exercise finds the missing number in an array containing n distinct numbers from 0 to n.

---

# Problem

Given an array containing n distinct numbers taken from the range [0, n], find the missing number.

* The array length is n, but it should contain n+1 numbers (0 to n)
* One number is missing
* The array may be unsorted

---

### Example

Input:

findMissingNumberByXor([0, 1, 3, 2])

Explanation:
The range is 0 to 4, but 4 is missing

Output:

4

---

# Folder Structure

find-missing-number/
│
├── findMissingNumber.js
├── findMissingNumber.test.js
└── README.md

---

# Solutions Implemented

---

## 1. findMissingNumber (Sort + Compare)

* Sorts the array first
* Checks if first element is 0, otherwise returns 0
* Iterates to find the gap (expected vs actual)

## 2. findMissingNumber2 (Sum Formula)

* Uses Gauss formula: n * (n + 1) / 2
* Calculates expected sum vs actual sum
* The difference is the missing number

## 3. findMissingNumberByXor (Bitwise XOR)

* Uses XOR properties: a ^ a = 0, a ^ 0 = a
* XOR all indices and all values
* The result is the missing number

---

# Concepts Practiced

* Array sorting
* Gauss sum formula
* Bitwise XOR operations
* Mathematical optimization

---

# Time Complexity

* Sort + Compare: O(n log n)
* Sum Formula: O(n)
* XOR: O(n)

---

# Space Complexity

* All versions: O(1) extra space (sorting may vary)

---

# Author

Angel Andrei Espiritu Pacheco