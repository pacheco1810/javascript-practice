# User Purchases

This exercise analyzes user purchases to find top products and user preferences.

---

# Problem

Given an array of purchases with userId and product:

* Find the top 2 most purchased products overall
* Find the most purchased product per user
* Get product counts per user
* Get top product with count per user
* Find global top products from users' top products

---

### Example

Input:

purchases = [
  { userId: 1, product: "laptop" },
  { userId: 2, product: "phone" },
  { userId: 1, product: "laptop" },
  { userId: 3, product: "tablet" },
  ...
]

Output (getGlobalTopProductFromTopUsers):
{ topProduct: ["laptop", "phone", "tablet"], max: 2 }

---

# Folder Structure

user-purchases/
│
├── userPurchases.js
├── userPurchases.test.js
└── README.md

---

# Solutions Implemented

---

## 1. getTopProducts

* Counts product frequencies
* Sorts descending and returns top 2

## 2. getTopProductPerUser

* Groups by userId
* Tracks highest count per user
* Returns top product for each user

## 3. getUserProductCounts

* Returns nested object with product counts per user

## 4. getUsersTopProductWithCount

* Returns top product and its count per user

## 5. getGlobalTopProductFromTopUsers

* Uses previous function
* Finds products with highest count across users
* Handles ties by returning array

---

# Concepts Practiced

* Array reduce() method
* Object.entries() and Object.fromEntries()
* Sorting arrays
* Data aggregation
* Nested object structures

---

# Time Complexity

O(n log n)

Where n is the number of purchases.

---

# Author

Angel Andrei Espiritu Pacheco