# Order Summary

This exercise summarizes an array of orders by calculating total price, collecting product names, and identifying expensive orders.

---

# Problem

Given an array of order objects with id, product, and price:

* Calculate the total sum of all order prices
* Collect all product names into an array
* Identify orders with price > 100 (expensive orders)

---

### Example

Input:

orders = [
  { id: 1, product: "Laptop", price: 1000 },
  { id: 2, product: "Mouse", price: 50 },
  { id: 3, product: "Keyboard", price: 100 },
  { id: 4, product: "Monitor", price: 300 }
]

Output:

{
  total: 1450,
  products: ["Laptop", "Mouse", "Keyboard", "Monitor"],
  expensiveOrders: [
    { id: 1, product: "Laptop", price: 1000 },
    { id: 4, product: "Monitor", price: 300 }
  ]
}

---

# Folder Structure

order-summary/
│
├── orderSummary.js
├── orderSummary.test.js
└── README.md

---

# Solutions Implemented

---

## 1. summarizeOrders with Reduce

* Uses reduce() to accumulate multiple values in a single pass
* Accumulates total price
* Builds array of product names
* Filters expensive orders (price > 100)

Purpose:
Practice reduce() for complex aggregations, object accumulation, and conditional logic.

---

# Concepts Practiced

* Array reduce() method
* Object accumulation
* Conditional logic
* Array push
* Single-pass data processing

---

# Time Complexity

O(n)

Where n is the number of orders.

---

# Author

Angel Andrei Espiritu Pacheco