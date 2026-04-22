/**
 * Problem: Find the length of the longest substring without repeating characters
 * Topic: Sliding Window
 * Difficulty: Medium
 */

// Input: longestUniqueSubstring("abcabcbb")
// Output: 3

function longestUniqueSubstring(s){
    let left = 0;
    const miSet = new Set();
    let maxLength = 0;
    
    for(let right = 0; right < s.length; right++){
        if(!miSet.has(s[right])){
            miSet.add(s[right]);
        } else {
            while(s[left] !== s[right]){
                miSet.delete(s[left]);
                left++;
            }
            miSet.delete(s[left]);
            left++;
            miSet.add(s[right]);
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

module.exports = {
    longestUniqueSubstring
};