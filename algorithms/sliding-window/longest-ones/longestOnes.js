/**
 * Problem: Find the longest subarray of 1's after flipping up to k zeros
 * Topic: Sliding Window
 * Difficulty: Medium
 */

// Input: longestOnes([1,1,0,0,1,1,1,0,1,1,0,0,1,1,1], 2)
// Output: 8

function longestOnes(nums, k){
    let left = 0;
    let zeros = 0;
    let max = 0; 
  
    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 0){
            zeros++;
        }
        while(zeros > k){
            if(nums[left] === 0){
                zeros--;
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
  
    return max; 
}

module.exports = {
    longestOnes
};