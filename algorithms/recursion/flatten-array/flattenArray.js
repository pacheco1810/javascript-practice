/**
 * Problem: Flatten a nested array recursively
 * Topic: Recursion
 * Difficulty: Easy
 */

// Input: flattenArray([1, [2, [3, 4]], 5])
// Output: [1, 2, 3, 4, 5]

function flattenArray(arr) {
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flattenArray(item));
        }
        else result.push(item);
    }
    return result;
}

module.exports = {
    flattenArray
};