/**
 * Problem: Find the maximum sum of any contiguous subarray of size k
 * Topic: Sliding Window
 * Difficulty: Easy
 */

// Input: maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)
// Output: 39 (subarray [10, 23, 3, 1])

function maxSumSubarray(nums, k){
    let sum = 0;

    for(let i = 0; i < k; i++){
        sum += nums[i];
    }
  
    let max = sum;
  
    for(let i = k; i < nums.length; i++){
        sum = sum - nums[i - k];
        sum = sum + nums[i];
        max = Math.max(max, sum);
    }
  
    return max; 
}

module.exports = {
    maxSumSubarray
};