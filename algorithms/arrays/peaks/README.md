# Peaks

This exercise identifies peaks in an array. A peak is an element that is greater than or equal to (or strictly greater than) its neighbors.

---

# Problem

Create functions that:

* Detect if a specific position is a peak
* Find the first peak in an array
* Find all peaks in an array
* Find the first or last peak based on mode

Peaks can be detected in two modes:
* **Non-strict (strict = false)**: Element >= neighbors
* **Strict (strict = true)**: Element > neighbors

Edge elements are considered peaks if they satisfy the condition with their only neighbor.

---

### Example

Input:

firstOrLastPeak([2, 3, 2, 4, 2, 5], false, "last")

Output:

5

---

# Folder Structure

peaks/
│
├── peaks.js
├── peaks.test.js
└── README.md

---

# Solutions Implemented

---

## 1. isPeak

* Checks left and right neighbors (null for edge elements)
* Uses a comparison function based on strict mode
* Returns true if element meets peak condition

## 2. firstPeakNumber

* Iterates through array
* Returns first element that is a peak

## 3. allPeakNumber

* Iterates through array
* Returns array of all peaks or null if none found

## 4. firstOrLastPeak

* Validates mode parameter
* Calls allPeakNumber
* Returns first or last peak based on mode

---

# Concepts Practiced

* Array iteration
* Edge case handling
* Higher-order functions (compare function)
* Ternary operators
* Conditional logic
* Multiple function composition

---

# Time Complexity

O(n)

Where n is the length of the array.

---

# Author

Angel Andrei Espiritu Pacheco