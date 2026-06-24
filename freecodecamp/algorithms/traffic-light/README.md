# Traffic Light Sequence Simulator

This exercise simulates configurable traffic light cycles and logs anomalies.

---

# Problem

Build a traffic light sequence simulator with two functions:

1. `runSequence(config, cycles)` - Simulates traffic light cycles and logs each phase

2. `generateTimeline(config, cycles)` - Returns an array of cumulative timestamps for each phase

Configuration objects have:
- `fault`: boolean that stops simulation early when true
- `phases`: array of phase objects with `color` and `duration` properties

---

### Example

Input:

runSequence(config1, 1)
generateTimeline(config1, 1)

Output (console logs):
Switching to green for 5 s
Switching to yellow for 2 s
Switching to red for 4 s

Output (return value):
[5, 7, 11]

---

# Folder Structure

traffic-light/
│
├── trafficLight.js
├── trafficLight.test.js
└── README.md

---

# Solutions Implemented

---

## 1. runSequence

* Checks if phases array is empty → logs "No phases found"
* Checks if fault is true → logs "Faulted phase!" and stops
* Iterates through cycles and phases
* Logs "Invalid phase detected" if duration <= 0
* Logs "Switching to [color] for [duration] s" for valid phases

## 2. generateTimeline

* Iterates through cycles and phases
* Accumulates duration for each phase
* Returns array of cumulative timestamps
* Processes all phases without validation (includes invalid durations)

---

# Concepts Practiced

* Objects and nested arrays
* Conditional logic
* Loops (for, while)
* Array accumulation
* Console logging

---

# Time Complexity

O(n × m)

Where n is the number of cycles and m is the number of phases.

---

# Author

Angel Andrei Espiritu Pacheco