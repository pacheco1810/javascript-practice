/**
 * Problem: Perform a search and replace on a string while preserving case
 * Topic: Strings / Regex
 * Difficulty: Easy
 */

// Input: myReplace("Let us go to the store", "store", "mall")
// Output: "Let us go to the mall"

function myReplace(str, word, replace){
  replace = /[A-Z]/.test(word[0]) 
    ? replace.charAt(0).toUpperCase() + replace.slice(1) 
    : replace.charAt(0).toLowerCase() + replace.slice(1);

  const regex = new RegExp(word, "g");
  str = str.replace(regex, replace);

  return str;
}

module.exports = {
  myReplace
};