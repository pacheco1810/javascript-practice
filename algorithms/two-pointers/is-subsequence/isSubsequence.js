/**
 * Problem: Check if a string is a subsequence of another string
 * Topic: Two Pointers
 * Difficulty: Easy
 */

// Input: isSubsequenceByFor("abc", "ahbgdc")
// Output: true
// Input: isSubsequenceByFor("axc", "ahbgdc")
// Output: false

function isSubsequenceByFor(s, t){
    let i = 0;
    for(let j = 0; j < t.length; j++){
        if(s[i] === t[j]) i++;
        if(i === s.length) return true;   
    }
    return false;
}

// Input: isSubsequenceByTwoPointers("abc", "ahbgdc")
// Output: true

function isSubsequenceByTwoPointers(s, t){
    let i = 0;
    let j = 0;
    
    while(j < t.length && i < s.length){
        if(s[i] === t[j]){
            i++;
        }
        else j++;
    }
    
    return i === s.length;
}

module.exports = {
    isSubsequenceByFor,
    isSubsequenceByTwoPointers
};