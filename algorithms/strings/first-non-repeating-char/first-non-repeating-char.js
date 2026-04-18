/**
 * Problem: Find the first non-repeating character in a string
 * Topic: Strings
 * Difficulty: Easy
 */

// Input: firstNonRepeatingClassic("swiss")
// Output: "The first letter not repeating is: w"

// Solution 1 — Classic nested loops
function firstNonRepeatingClassic(strValue) {
    let char, flag = 0;
    for(let i = 0; i < strValue.length; i++){
        char = strValue[i];
        flag = 0;
        for(let j = 0; j < strValue.length; j++){
            if(j !== i && strValue[j] === char){
                flag += 1;
                break; 
            }
        }
        if(flag === 0){
            return `The first letter not repeating is: ${char}`;
        }
    }
    return null;
}

// Input: firstNonRepeatingFrequency("swiss")
// Output: "The first letter not repeating is: w"

// Solution 2 — Frequency counter (object)
function firstNonRepeatingFrequency(strValue) {
    let char;
    let characters = {};
    for(let letter = 0; letter < strValue.length; letter++){
        char = strValue[letter];
        if(characters[char] === undefined){
            characters[char] = 1;   
        } else {
            characters[char] += 1;  
        }
    }
    for(let letters = 0; letters < strValue.length; letters++){
        char = strValue[letters];
        if(characters[char] === 1){
            return `The first letter not repeating is: ${char}`; 
        }
    }
    return null;
}

// Input: firstNonRepeatingMethods("swiss")
// Output: "The first letter not repeating is: w"

// Solution 3 — Using array methods
function firstNonRepeatingMethods(strValue) {
    const result = strValue.split("").find(char => strValue.indexOf(char) === strValue.lastIndexOf(char));
    return result ? `The first letter not repeating is: ${result}` : null; 
}

module.exports = {
    firstNonRepeatingClassic,
    firstNonRepeatingFrequency,
    firstNonRepeatingMethods
};