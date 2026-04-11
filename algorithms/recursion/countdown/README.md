# Countdown

This exercise counts down from a given number to 1 using recursion.

---

# Problem

Create a recursive function that:

* Prints each number from n down to 1
* Returns the string "takeoff!" when reaching 0

---

### Example

Input:

countDown(3)

Output (console):

3
2
1

Return value:

"takeoff!"

---

# Folder Structure

countdown/
│
├── countdown.js
├── countdown.test.js
└── README.md

---

# Solutions Implemented

---

## 1. countDown

* Uses recursion to count down
* Base case: n === 0 returns "takeoff!"
* Recursive case: prints n and calls countDown(n - 1)

---

# Concepts Practiced

* Recursion
* Base case
* Recursive case
* Function calls

---

# Time Complexity

O(n)

Where n is the starting number.

---

# Author

Angel Andrei Espiritu Pacheco