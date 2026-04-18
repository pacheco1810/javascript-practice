/**
 * Problem: Check if a string is a palindrome (reads the same forward and backward)
 * Topic: Strings
 * Difficulty: Easy
 */

// Input: palindromeClassic("racecar")
// Output: true

// Solution 1 — Classic for loop
function palindromeClassic(strValue) {
    let reversed = "";
    strValue = strValue.toLowerCase();
    for(let char = strValue.length - 1; char >= 0; char--){
        reversed += strValue[char];
    }
    return strValue === reversed; 
}

// Input: palindromeLoop("racecar")
// Output: true

// Solution 2 — JavaScript methods
function palindromeLoop(strValue){
    strValue = strValue.toLowerCase();
    const reversed = strValue.split("").reverse().join("");
    return strValue === reversed;
}

// Input: palindromeTwoPointers("racecar")
// Output: true

// Solution 3 — Two pointers technique
function palindromeTwoPointers(strValue){
    strValue = strValue.toLowerCase();
    for(let char = 0; char < strValue.length / 2; char++){
        if(strValue[char] !== strValue[strValue.length - char - 1]){
            return false;
        }
    }
    return true;
}

module.exports = {
    palindromeClassic,
    palindromeLoop,
    palindromeTwoPointers
};