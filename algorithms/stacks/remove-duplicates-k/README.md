# Remove Duplicates K

This exercise removes adjacent duplicates that appear exactly k times using a stack.

---

# Problem

Given a string and an integer k, remove adjacent duplicates that appear exactly k times.

* When k adjacent equal letters are found, they are removed
* After removal, new adjacent duplicates may form
* Continue until no k adjacent duplicates remain

---

### Example

Input:

removeDuplicatesK("deeedbbcccbdaa", 3)

Process:
"deeedbbcccbdaa" → "ddbbcccbdaa" (remove "eee")
"ddbbcccbdaa" → "ddbbbdaa" (remove "ccc")
"ddbbbdaa" → "dddaa" (remove "bbb")
"dddaa" → "aa" (remove "ddd")

Output:

"aa"

---

# Folder Structure

remove-duplicates-k/
│
├── removeDuplicatesK.js
├── removeDuplicatesK.test.js
└── README.md

---

# Solutions Implemented

---

## 1. removeDuplicatesK

* Uses a stack where each element is [character, count]
* Iterates through each character:
  - If top character matches current → increment count
  - If count reaches k → pop from stack
  - Otherwise → push [char, 1]
* Reconstructs string by repeating characters by their count

---

# Concepts Practiced

* Stack data structure
* Counting consecutive duplicates
* String reconstruction

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Author

Angel Andrei Espiritu Pacheco