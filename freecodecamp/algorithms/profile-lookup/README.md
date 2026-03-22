# 📇 Profile Lookup

This exercise implements a function to **search for a contact and retrieve a specific property**.

---

# 📌 Problem

Given a name and a property, return the value of that property from the contact list.

### Rules:

* If the contact **does not exist** → return `"No such contact"`
* If the contact exists but the property **does not exist** → return `"No such property"`

---

## 🧪 Example

### Input

```id="2k8x7a"
lookUpProfile("Akira", "likes")
```

### Output

```id="8v2c5n"
["Pizza", "Coding", "Brownie Points"]
```

### Explanation

* "Akira" exists in the contacts list
* The property `"likes"` exists → return its value

---

## 🧪 Example 2

### Input

```id="p4s8dl"
lookUpProfile("Bob", "number")
```

### Output

```id="z8c2lx"
"No such contact"
```

---

## 🧪 Example 3

### Input

```id="t2x9kp"
lookUpProfile("Akira", "address")
```

### Output

```id="m9q3vd"
"No such property"
```

---

# 📁 Folder Structure

```id="c7z9kp"
profile-lookup/
│
├── lookUpProfile.js        # Algorithm implementation
├── lookUpProfile.test.js   # Unit tests
└── README.md               # Documentation
```

---

# ⚙️ Solution Implemented

## 🟢 Iterative Search (For Loop)

### ✔️ Approach

* Iterate through the contacts array
* Compare `firstName` with the given name
* If found:

  * Check if the property exists
  * Return its value or `"No such property"`
* If no match found → return `"No such contact"`

### 🎯 Purpose

Practice:

* Array traversal
* Object property access
* Conditional logic

---

# 🧪 Tests

This exercise includes **unit tests** to validate correctness.

### ✔️ Test Cases

* Existing contact with valid property
* Existing contact with invalid property
* Non-existent contact
* Edge cases

### ▶️ Run Tests

```id="n8v4kp"
npm test
```

---

# 🧠 Concepts Practiced

* Arrays of objects
* Property access (`obj[key]`)
* Loops
* Conditional logic

---

# ⏱️ Time Complexity

| Approach  | Complexity |
| --------- | ---------- |
| Iterative | O(n)       |

---

# ✍️ Author

**Angel Andrei Espiritu Pacheco**
