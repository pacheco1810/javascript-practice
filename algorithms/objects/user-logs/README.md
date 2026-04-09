# User Logs

This exercise analyzes user logs to generate analytics, find most active users, count actions, and determine top devices.

---

# Problem

Given an array of logs with userId, action, and device:

* Generate complete analytics per user (total actions, action counts, devices used)
* Find the user with the most actions
* Count total actions per user
* Find the user with the most purchase actions
* Determine the most used device per user

---

### Example

Input:

logs = [
  { userId: 1, action: "login", device: "mobile" },
  { userId: 2, action: "purchase", device: "desktop" },
  { userId: 1, action: "purchase", device: "mobile" },
  { userId: 3, action: "login", device: "desktop" },
  { userId: 2, action: "login", device: "mobile" },
  { userId: 1, action: "logout", device: "mobile" },
  { userId: 3, action: "purchase", device: "desktop" }
]

Output (getTopDevicePerUser):
{
  1: "mobile",
  2: "desktop",
  3: "desktop"
}

---

# Folder Structure

user-logs/
│
├── userLogs.js
├── userLogs.test.js
└── README.md

---

# Solutions Implemented

---

## 1. generateUserAnalytics

* Uses reduce() to build analytics object
* Uses Set for unique devices
* Converts Set to array in final pass

## 2. getMostActiveUser

* Uses reduce() to count actions per user
* Tracks maximum count and corresponding user

## 3. getUserActionCountMap

* Simple reduce to count total actions per user

## 4. getTopUserByAction

* Filters by action type (purchase)
* Finds user with most occurrences

## 5. getTopDevicePerUser

* Uses reduce() with nested object
* Tracks device counts per user
* Returns most used device per user

---

# Concepts Practiced

* Array reduce() method
* Set data structure
* Object destructuring
* Nullish coalescing assignment (??=)
* Object.fromEntries()
* Data aggregation

---

# Time Complexity

O(n)

Where n is the number of logs.

---

# Author

Angel Andrei Espiritu Pacheco