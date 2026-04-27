/**
 * Problem: Move all zeros to the end of the array while preserving relative order of non-zero elements
 * Topic: Two Pointers
 * Difficulty: Easy
 */

// Input: moveZeros([0, 1, 0, 3, 12])
// Output: [1, 3, 12, 0, 0]

function moveZeros(nums){
    let write = 0;
    let i = 0; 
    
    while(i < nums.length){
        if(nums[i] !== 0){
            nums[write] = nums[i];
            write++;
        }
        i++;
    }
  
    while(write < i){
        nums[write] = 0;
        write++; 
    }
  
    return nums;
}

module.exports = {
    moveZeros
};