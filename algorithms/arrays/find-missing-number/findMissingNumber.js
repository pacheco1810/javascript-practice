/**
 * Problem: Find the missing number in an array containing n distinct numbers from 0 to n
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: findMissingNumberByXor([0,1,3,2])
// Output: 4

// Version 1 - Sort and compare
function findMissingNumber(nums){
    nums = nums.sort((a, b) => a - b);
    let next = nums[0] + 1;
    if(nums[0] !== 0) return 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== next) return next;
        next++; 
    }
    return nums.length;
}

// Version 2 - Sum formula (Gauss)
function findMissingNumber2(nums){
    nums = nums.sort((a, b) => a - b);
    if(nums[0] !== 0) return 0;
    let n = nums.length;
    let expected = n * (n + 1) / 2;
    let real = 0;

    for(let num of nums){
        real += num; 
    }
  
    return expected - real === 0 ? nums.length : expected - real;
}

// Version 3 - XOR (bitwise)
function findMissingNumberByXor(nums){
    let xor = nums.length;
  
    for(let i = 0; i < nums.length; i++){
        xor ^= i ^ nums[i];
    }
  
    return xor;
}

module.exports = {
    findMissingNumber,
    findMissingNumber2,
    findMissingNumberByXor
};