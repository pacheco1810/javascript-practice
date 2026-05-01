/**
 * Problem: Move all zeros to the end of the array while preserving relative order of non-zero elements
 * Topic: Two Pointers
 * Difficulty: Easy
 */

// Input: moveZeros([0, 1, 0, 3, 12])
// Output: [1, 3, 12, 0, 0]

// Versión original - Two pass
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

// Versión 2 - Crear nuevo array
function moveZerosToEndNewArray(nums){
    let result = Array(nums.length).fill(0);
    let left = 0;
  
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            result[left] = nums[i];
            left++; 
        }
    }
 
    return result;
}

// Versión 3 - Two pointers con swap
function moveZerosToEndTwoPointers(nums){
    let left = 0; 
    let right = 0;
  
    while(right < nums.length){
        if(nums[right] !== 0){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
  
    return nums; 
}

module.exports = {
    moveZeros,
    moveZerosToEndNewArray,
    moveZerosToEndTwoPointers
};