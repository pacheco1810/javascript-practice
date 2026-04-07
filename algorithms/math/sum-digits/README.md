# Sum Digits

This exercise sums all digits of a number using different approaches.

---

# Problem

Given a number (as string or integer), return the sum of its digits.

* 1234 → 1 + 2 + 3 + 4 = 10
* Works with positive integers

---

### Example

Input:

sumDigitsByReduce("2222")

Output:

8

---

# Folder Structure

sum-digits/
│
├── sumDigits.js
├── sumDigits.test.js
└── README.md

---

# Solutions Implemented

---

## 1. sumDigitsByFor

* Treats number as string
* Uses for loop to iterate through characters
* Converts each char to number with unary + operator

## 2. sumDigitsByWhile

* Uses mathematical approach
* Extracts last digit with modulo operator
* Removes last digit with floor division

## 3. sumDigitsByForEach

* Splits string into array
* Uses forEach to iterate
* Accumulates sum with parseInt

## 4. sumDigitsByReduce

* Splits string into array
* Uses reduce for functional accumulation
* Most concise solution

---

# Concepts Practiced

* String conversion
* Mathematical operations (modulo, division)
* Array methods (split, forEach, reduce)
* Type conversion (parseInt, Number, unary +)

---

# Time Complexity

O(n)

Where n is the number of digits.

---

# Author

Angel Andrei Espiritu Pacheco