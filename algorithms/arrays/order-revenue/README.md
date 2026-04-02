# Order Revenue

This exercise processes orders to calculate totals, add totals to orders, and compute revenue by user with optional status filtering.

---

# Problem

Given an array of orders with items, user, and status:

* Calculate the total for each order (sum of price × quantity)
* Add a total property to each order
* Calculate total revenue with breakdown by user
* Filter revenue by order status (completed/pending)

---

### Example

Input:

getTotalRevenue(orders, "completed")

Output:

{
  total: 1750,
  Juan: 1100,
  Luis: 650
}

---

# Folder Structure

order-revenue/
│
├── orderRevenue.js
├── orderRevenue.test.js
└── README.md

---

# Solutions Implemented

---

## 1. getOrderTotal

* Uses reduce() to calculate total for order items
* Multiplies price × quantity for each item

## 2. addTotalToOrders

* Uses map() to create new array with total property
* Uses spread operator to preserve original order properties

## 3. getTotalRevenue

* Filters orders by status (optional)
* Uses reduce() to accumulate totals by user
* Returns object with total and per-user breakdown

---

# Concepts Practiced

* Array methods (filter, map, reduce)
* Object spread operator
* Destructuring
* Conditional logic
* Accumulator patterns
* Nested data structures

---

# Time Complexity

O(n × m)

Where n is the number of orders and m is the number of items per order.

---

# Author

Angel Andrei Espiritu Pacheco