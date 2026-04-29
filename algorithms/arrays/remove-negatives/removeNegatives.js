/**
 * Problem: Remove all negative numbers from an array
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: removeNegativesByReduce([1, -2, 3, -4, 5])
// Output: [1, 3, 5]

function removeNegativesByFor(nums){
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] < 0){
            nums.splice(i, 1); 
        }
    }
    return nums;
}

function removeNegativesByFilter(nums){
    return nums.filter(num => num >= 0);
}

function removeNegativesByReduce(nums){
    return nums.reduce((acc, num) => {
        if(num >= 0) acc.push(num);
        return acc;
    }, []);
}

module.exports = {
    removeNegativesByFor,
    removeNegativesByFilter,
    removeNegativesByReduce
};