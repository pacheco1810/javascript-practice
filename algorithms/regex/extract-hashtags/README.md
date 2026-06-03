# Extract Hashtags

This exercise extracts all hashtags from a text using regular expressions.

---

# Problem

Create a function that finds and returns all hashtags in a given string.

* A hashtag starts with # followed by one or more non-space characters
* Return an array of all hashtags found
* Return null if no hashtags are found

---

### Example

Input:

extractHashtags("Aprendiendo #JavaScript y #Regex con #FCC")

Output:

["#JavaScript", "#Regex", "#FCC"]

---

# Folder Structure

extract-hashtags/
│
├── extractHashtags.js
├── extractHashtags.test.js
└── README.md

---

# Regex Pattern

/#[^\s]+/g

| Component | Description |
|-----------|-------------|
| # | Literal hash character |
| [^\s]+ | One or more non-space characters |
| g | Global flag (find all matches) |

---

# Concepts Practiced

* Regular expressions
* Global flag
* Character class negation
* String matching

---

# Author

Angel Andrei Espiritu Pacheco