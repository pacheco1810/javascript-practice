/**
 * Problem: Count total number of non-array items in a nested array
 * Topic: Recursion
 * Difficulty: Easy
 */

// Input: countNestedItems([1, [2, [3, 4]], 5])
// Output: 5

function countNestedItems(arr){
    if(arr.length === 0) return 0;
    
    return arr.reduce((acc, item) =>{
        if(Array.isArray(item)){
            return acc + countNestedItems(item);
        }
        return acc + 1;
    }, 0);
}

module.exports = {
    countNestedItems
};