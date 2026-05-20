/**
 * Problem: Text analysis tool for palindromes and repeated phrases
 * Topic: Arrays
 * Difficulty: Medium
 */

// Input: isPalindrome("racecar")
// Output: true

function isPalindrome(word){
  return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
}

// Input: findPalindromeBreaks(["racecar", "level", "hello"])
// Output: [2]

function findPalindromeBreaks(words){
  if(words.length === 0) return [];
  let result = [];
  for(let i = 0; i < words.length; i++){
    if(!isPalindrome(words[i])){
      result.push(i);
    }
  }
  return result;
}

// Input: findRepeatedPhrases(["i", "love", "js", "i", "love", "js"], 2)
// Output: [0, 3]

function findRepeatedPhrases(words, phraseLength){
  if(words.length <= phraseLength) return [];
  
  const phraseMap = {};
  const result = [];
  
  for(let i = 0; i <= words.length - phraseLength; i++){
    const phrase = words.slice(i, i + phraseLength).join(" ");
    
    if(phraseMap[phrase] === undefined){
      phraseMap[phrase] = i;
    } else {
      if(phraseMap[phrase] !== null){
        result.push(phraseMap[phrase]);
        phraseMap[phrase] = null;
      }
      result.push(i);
    }
  }
  
  return result.sort((a, b) => a - b);
}

// Input: analyzeTexts([["i", "love", "js", "i", "love", "js"], ["racecar", "level", "hello"]], 2)
// Output: [
//   { repeatedPhrases: [0, 3], palindromeBreaks: [0,1,2,3,4,5] },
//   { repeatedPhrases: [], palindromeBreaks: [2] }
// ]

function analyzeTexts(texts, phraseLength){
  if(texts.length === 0) return [];
  return texts.map((words) => {
    return {
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words)
    };
  }); 
}

module.exports = {
  isPalindrome,
  findPalindromeBreaks,
  findRepeatedPhrases,
  analyzeTexts
};