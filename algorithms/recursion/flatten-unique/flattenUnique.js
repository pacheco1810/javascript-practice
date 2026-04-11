/**
 * Problem: Flatten a nested array and remove duplicates
 * Topic: Recursion
 * Difficulty: Medium
 */

// Input: flattenUnique([1, [2, [2, 3]], 3, 4])
// Output: [1, 2, 3, 4]

function flattenUnique(arr){
    let flat = arr.reduce((acc, item) => {
        if(Array.isArray(item)){
            acc.push(...flattenUnique(item));
        }else{
            acc.push(item);
        }
        return acc;
    }, []);
    return [...new Set(flat)];
}

module.exports = {
    flattenUnique
};