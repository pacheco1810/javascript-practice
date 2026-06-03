/**
 * Problem: Detect if a word appears consecutively twice in a string
 * Topic: Regex
 * Difficulty: Easy
 */

// Input: hasRepeatedWord("hello hello world")
// Output: true

function hasRepeatedWord(text){
  const regex = /(\w+)\s+\1/;
  return regex.test(text);
}

module.exports = {
  hasRepeatedWord
};