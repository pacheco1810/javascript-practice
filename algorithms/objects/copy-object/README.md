# Copy Object

This exercise copies an object using different methods.

---

# Problem

Given an object, create a copy using different approaches:

* Shallow copy vs Deep copy
* Different methods have different behaviors

---

### Example

Input:

copyObjByJSON({ a: 1, b: { c: 2 } })

Output:

{ a: 1, b: { c: 2 } }

---

# Folder Structure

copy-object/
│
├── copyObject.js
├── copyObject.test.js
└── README.md

---

# Solutions Implemented

---

## 1. copyObjBySpread

* Uses spread operator { ...obj }
* Creates a shallow copy

## 2. copyObjByAssign

* Uses Object.assign({}, obj)
* Creates a shallow copy

## 3. copyObjByJSON

* Uses JSON.parse(JSON.stringify(obj))
* Creates a deep copy
* Cannot copy functions, undefined, symbols

## 4. copyObjByStructured

* Uses structuredClone()
* Creates a deep copy
* Modern and efficient

---

# Concepts Practiced

* Spread operator
* Object.assign()
* JSON methods
* structuredClone()
* Shallow vs Deep copy

---

# Time Complexity

O(n)

Where n is the number of properties in the object.

---

# Author

Angel Andrei Espiritu Pacheco