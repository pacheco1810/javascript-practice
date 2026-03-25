# Student Grading

This exercise implements a student grading system with functions to calculate averages, determine letter grades, check passing status, and generate personalized messages.

---

# Problem

Create a system that:

* Calculates the average score from an array of grades
* Converts a numerical score to a letter grade (A+, A, B, C, D, F)
* Determines if a student passed (grade not F)
* Generates a personalized message with class average, student grade, and pass/fail status

---

### Example

Input:

studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37);

Output:

"Class average: 71.7. Your grade: F. You failed the course."

---

# Folder Structure

student-grading/
│
├── studentGrading.js
├── studentGrading.test.js
└── README.md

---

# Solutions Implemented

---

## 1. getAverage

* Iterates through array with a for loop
* Sums all grades and divides by array length

## 2. getGrade

* Uses conditional statements to return letter grade
* Handles edge case for 100 (A+)

## 3. hasPassingGrade

* Calls getGrade and checks if grade is not F

## 4. studentMsg

* Combines all functions to generate formatted message
* Uses template literals for string interpolation

---

# Concepts Practiced

* Arrays
* Loops (for)
* Conditional statements
* Functions
* Template literals
* String concatenation

---

# Time Complexity

O(n)

Where n is the number of grades in the array.

---

# Author

Angel Andrei Espiritu Pacheco