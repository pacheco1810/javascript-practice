/**
 * Problem: Convert a string to Pig Latin
 * Topic: Strings / Regex
 * Difficulty: Easy
 */

// Input: translatePigLatin("algorithm")
// Output: "algorithmway"

function translatePigLatin(str){
  const regex = /[aeiou]/g;
  if(regex.test(str[0])){
    str = str + "way";
  } else {
    const index = str.search(regex);
    const consonants = str.slice(0, index);
    const rest = str.slice(index);

    if(index === -1) return str + "ay";

    str = rest + consonants + "ay"; 
  }
  
  return str; 
}

module.exports = {
  translatePigLatin
};