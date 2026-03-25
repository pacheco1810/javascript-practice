# Inventory Management

This exercise implements an inventory management system with functions to add, remove, and search products.

---

# Problem

Create an inventory system that:

* Stores products with name and quantity
* Adds new products or updates existing ones
* Removes products by reducing quantity
* Automatically removes products when quantity reaches zero
* Handles case-insensitive product names

---

### Example

Input:

addProduct({ name: "apple", quantity: 10 });
addProduct({ name: "apple", quantity: 5 });
removeProduct("apple", 7);

Output:

"apple added to inventory"
"apple quantity updated"
"Remaining apple pieces: 8"

---

# Folder Structure

inventory-management/
│
├── inventoryManagement.js
├── inventoryManagement.test.js
└── README.md

---

# Solutions Implemented

---

## 1. findProductIndex

* Converts name to lowercase for case-insensitive search
* Uses findIndex to locate product in inventory

## 2. addProduct

* Normalizes product name to lowercase
* Checks if product exists
* Updates quantity if exists, otherwise adds new product

## 3. removeProduct

* Normalizes name to lowercase
* Validates product exists
* Checks if sufficient quantity is available
* Reduces quantity and removes product if quantity reaches zero

---

# Concepts Practiced

* Arrays of objects
* Array methods (findIndex, push, splice)
* Case-insensitive string handling
* Conditional logic
* State management

---

# Time Complexity

O(n)

Where n is the number of products in the inventory.

---

# Author

Angel Andrei Espiritu Pacheco