/**
 * Problem: Sum all elements of an array using recursion
 * Topic: Recursion
 * Difficulty: Easy
 */

// Input: sumArrayRecursive([1, 2, 3, 4])
// Output: 10

function sumArrayRecursive(arr) {
    if (arr.length === 0) return 0;
    
    return arr[0] + sumArrayRecursive(arr.slice(1));
}

module.exports = {
    sumArrayRecursive
};