# Pig Latin

This exercise converts a string to Pig Latin using regular expressions.

---

# Problem

Create a function that converts a word to Pig Latin following these rules:

* If the word starts with a vowel, add "way" to the end
* If the word starts with a consonant, move all consonants before the first vowel to the end and add "ay"
* If the word has no vowels, add "ay" to the end

Vowels: a, e, i, o, u

---

### Example

Input:

translatePigLatin("algorithm")

Output:

"algorithmway"

Input:

translatePigLatin("california")

Output:

"aliforniacay"

---

# Folder Structure

pig-latin/
│
├── pigLatin.js
├── pigLatin.test.js
└── README.md

---

# Solutions Implemented

---

## 1. translatePigLatin

* Checks if first character is a vowel using regex
* If vowel → add "way"
* If consonant → find first vowel index, split string, move consonants to end, add "ay"
* If no vowel → add "ay"

---

# Regex Pattern

/[aeiou]/g

| Component | Description |
|-----------|-------------|
| [aeiou] | Matches any vowel |
| g | Global flag |

---

# Concepts Practiced

* Regular expressions
* String manipulation (slice, search)
* Conditional logic

---

# Time Complexity

O(n)

Where n is the length of the string.

---

# Author

Angel Andrei Espiritu Pacheco