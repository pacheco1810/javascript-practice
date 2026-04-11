/**
 * Problem: Sum all numbers in a nested array recursively
 * Topic: Recursion
 * Difficulty: Easy
 */

// Input: sumNestedArray([1, [2, [3, 4]], 5])
// Output: 15

function sumNestedArray(arr){
    if(arr.length === 0) return 0;
    
    return arr.reduce((acc, item) => {
        if(Array.isArray(item)){
            return acc + sumNestedArray(item);
        }
        return acc + item;
    }, 0)
}

module.exports = {
    sumNestedArray
};