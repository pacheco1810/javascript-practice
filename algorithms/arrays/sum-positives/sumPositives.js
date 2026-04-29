/**
 * Problem: Sum all positive numbers in an array
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: sumPositivesByFor([1, -2, 3, -4, 5])
// Output: 9

function sumPositivesByFor(nums){
    let result = 0;
    for(let num of nums){
        if(num > 0){
            result += num;
        }
    }
    return result; 
}

function sumPositivesByMethods(nums){
    return nums.filter(num => num > 0).reduce((acc, num) => {
        return acc + num; 
    }, 0);
}

module.exports = {
    sumPositivesByFor,
    sumPositivesByMethods
};