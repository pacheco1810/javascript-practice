# Smart Pantry Restocker

This exercise implements a pantry management program that processes shipments, plans restocking actions, and groups them by storage zone.

---

# Problem

Build functions to manage a pantry restocking system:

* Parse raw shipment data into structured objects
* Compare incoming shipment with current pantry to determine actions (restock, donate, discard)
* Group actions by storage zone
* Create deep copies of pantry data

---

### Example

Input:

parseShipment(["A1|Rice|10|2025-12-31|north", "B2|Beans|5|2025-12-31|south"])

Output:

[
  { sku: "A1", name: "Rice", qty: 10, expires: "2025-12-31", zone: "north" },
  { sku: "B2", name: "Beans", qty: 5, expires: "2025-12-31", zone: "south" }
]

---

# Folder Structure

pantry-restocker/
│
├── pantryRestocker.js
├── pantryRestocker.test.js
└── README.md

---

# Solutions Implemented

---

## 1. parseShipment

* Splits each string by "|"
* Creates object with sku, name, qty, expires, zone
* Handles missing zone (defaults to "general")
* Removes duplicate SKUs (keeps first occurrence)

## 2. planRestock

* Creates Set of SKUs from pantry
* For each shipment item:
  - qty <= 0 → "discard"
  - SKU exists in pantry → "restock"
  - Otherwise → "donate"

## 3. groupByZone

* Uses reduce to group actions by item.zone
* Creates array for each zone

## 4. clonePantry

* Uses map with spread operator to create deep copy

---

# Concepts Practiced

* Array methods (map, reduce)
* Set for unique value tracking
* Object destructuring
* Spread operator for shallow copies
* Default parameter values

---

# Time Complexity

* parseShipment: O(n)
* planRestock: O(n + m)
* groupByZone: O(n)
* clonePantry: O(n)

---

# Author

Angel Andrei Espiritu Pacheco