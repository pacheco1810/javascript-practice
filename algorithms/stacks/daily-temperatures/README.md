# Daily Temperatures

This exercise finds how many days until a warmer temperature for each day using a monotonic decreasing stack.

---

# Problem

Given an array of daily temperatures, return an array where each element is the number of days you would have to wait until a warmer temperature.

* If there is no future day with a warmer temperature, return 0
* The result array has the same length as the input

---

### Example

Input:

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])

Explanation:
- 73 → 1 day to reach 74 (1)
- 74 → 1 day to reach 75 (1)
- 75 → 4 days to reach 76 (4)
- 71 → 2 days to reach 72 (2)
- 69 → 1 day to reach 72 (1)
- 72 → 1 day to reach 76 (1)
- 76 → never (0)
- 73 → never (0)

Output:

[1, 1, 4, 2, 1, 1, 0, 0]

---

# Folder Structure

daily-temperatures/
│
├── dailyTemperatures.js
├── dailyTemperatures.test.js
└── README.md

---

# Solutions Implemented

---

## 1. dailyTemperatures

* Uses a monotonic decreasing stack (stores indices)
* Iterates through temperatures:
  - While current temp > temp at top of stack
    - Pop index from stack
    - Calculate days difference
    - Store in result
  - Push current index to stack
* Remaining indices in stack have result 0

---

# Concepts Practiced

* Monotonic decreasing stack
* Next greater element problem
* Index mapping

---

# Time Complexity

O(n)

Each element is pushed and popped at most once.

---

# Space Complexity

O(n)

For the stack in worst case (decreasing temperatures).

---

# Author

Angel Andrei Espiritu Pacheco