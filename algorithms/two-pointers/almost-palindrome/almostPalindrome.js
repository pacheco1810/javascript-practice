/**
 * Problem: Check if a string can be a palindrome by deleting at most one character
 * Topic: Two Pointers
 * Difficulty: Medium
 */

// Input: isAlmostPalindrome("racecar")
// Output: true
// Input: isAlmostPalindrome("abca")
// Output: true
// Input: isAlmostPalindrome("abc")
// Output: false
// Input: isAlmostPalindrome("deee")
// Output: true

function isPalindrome(s, left, right){
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function isAlmostPalindrome(s) {
    let left = 0; 
    let right = s.length - 1;
    if(isPalindrome(s, left, right)) return true; 
    while(left < right){
        if(s[left] !== s[right]){
            return (isPalindrome(s, left + 1, right)) || (isPalindrome(s, left, right - 1));
        }
        left++;
        right--;
    }
    return true;
}

module.exports = {
    isPalindrome,
    isAlmostPalindrome
};