/**
 * Problem: Find the most frequent and least frequent characters in a string (letters only)
 * Topic: Strings
 * Difficulty: Easy
 */

// Input: getMostFrequentChar("hello world")
// Output: "l"

// Input: getMostFrequentChar("hello world")
// Output: ["h", "e", "o", "w", "r", "d"] (all appear once)

function getMostFrequentChar(str){
  const result = str.match(/[a-zA-Z]/g).reduce((acc, char) => {
    acc.chars[char] = (acc.chars[char] ?? 0) + 1; 
    
    if(acc.chars[char] > acc.max){
      acc.max = acc.chars[char];
      acc.mostChar = [];
      acc.mostChar.push(char);
    } else if(acc.chars[char] === acc.max){
      acc.mostChar.push(char);
    }
    
    return acc;
  }, {chars: {}, max: -Infinity, mostChar: []});
  
  return result.mostChar.length === 1 ? result.mostChar[0] : result.mostChar;
}

// Input: getLeastFrequentChar("hello world")
// Output: ["h", "e", "o", "w", "r", "d"] (all appear once)

function getLeastFrequentChar(str){
  const resArr = [];
  const result = str.split("").filter(char => /[a-zA-Z]/.test(char)).reduce((acc, char) => {
    acc.chars[char] = (acc.chars[char] ?? 0) + 1; 
    
    if(acc.chars[char] < acc.min){
      acc.min = acc.chars[char];
      acc.minChar = [];
      acc.minChar.push(char);
    } else if(acc.chars[char] === acc.min){
      acc.minChar.push(char);
    }
    
    return acc;
  }, {chars: {}, min: Infinity});
  
  for(let char in result.chars){
    if(result.chars[char] === result.min){
      resArr.push(char);  
    }
  }
  
  return resArr;
}

module.exports = {
  getMostFrequentChar,
  getLeastFrequentChar
};