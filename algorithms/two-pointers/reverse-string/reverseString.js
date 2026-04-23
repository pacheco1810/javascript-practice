/**
 * Problem: Reverse a string in-place using two pointers
 * Topic: Two Pointers
 * Difficulty: Easy
 */

// Input: reverseString(["h", "e", "l", "l", "o"])
// Output: ["o", "l", "l", "e", "h"]

function reverseString(s){
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s; 
}

module.exports = {
    reverseString
};