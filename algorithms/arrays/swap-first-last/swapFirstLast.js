/**
 * Problem: Swap the first and last elements of an array
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: swapFirstAndLastByTemVar([1, 2, 3, 4])
// Output: [4, 2, 3, 1]

// Solution 1 - Using temporary variable
function swapFirstAndLastByTemVar(words){
  let temp = words[0];
  words[0] = words[words.length - 1];
  words[words.length - 1] = temp;
  return words;
}

// Input: swapFirstAndLastBySplice([1, 2, 3, 4])
// Output: [4, 2, 3, 1]

// Solution 2 - Using splice
function swapFirstAndLastBySplice(words){
  words[0] = words.splice(words.length - 1, 1, words[0])[0];
  return words;
}

// Input: swapFirstAndLastBySpread([1, 2, 3, 4])
// Output: [4, 2, 3, 1]

// Solution 3 - Using spread operator (destructuring)
function swapFirstAndLastBySpread(words){
  [words[0], words[words.length - 1]] = [words[words.length - 1], words[0]];
  return words;
}

module.exports = {
  swapFirstAndLastByTemVar,
  swapFirstAndLastBySplice,
  swapFirstAndLastBySpread
};