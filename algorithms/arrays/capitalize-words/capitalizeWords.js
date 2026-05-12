/**
 * Problem: Capitalize the first letter of each word in an array
 * Topic: Strings
 * Difficulty: Easy
 */

// Input: capitalizeWordsByFor(["apple", "banana", "orange"])
// Output: ["Apple", "Banana", "Orange"]

// Solution 1 - Using for...of loop
function capitalizeWordsByFor(words){
  if(!Array.isArray(words) || words.length === 0){
    return [];
  }
  
  let result = [];
  
  for(let word of words){
    if(typeof word !== "string" || word.trim() === ""){
        continue;
    }
    result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  
  return result;
}

// Input: capitalizeWordsByFilterAndMap(["apple", "banana", "orange"])
// Output: ["Apple", "Banana", "Orange"]

// Solution 2 - Using filter and map
function capitalizeWordsByFilterAndMap(words){
  if(!Array.isArray(words) || words.length === 0){
    return [];
  }
  return words
    .filter(word => typeof word === "string" && word.trim() !== "")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
}

// Input: capitalizeWordsByReduce(["apple", "banana", "orange"])
// Output: ["Apple", "Banana", "Orange"]

// Solution 3 - Using reduce
function capitalizeWordsByReduce(words){
  if(!Array.isArray(words) || words.length === 0){
    return [];
  }
  return words.reduce((acc, word) => {
    if(typeof word !== "string" || word.trim() === ""){
        return acc;
    }
    
    acc.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    
    return acc; 
  }, []);
}

module.exports = {
  capitalizeWordsByFor,
  capitalizeWordsByFilterAndMap,
  capitalizeWordsByReduce
};