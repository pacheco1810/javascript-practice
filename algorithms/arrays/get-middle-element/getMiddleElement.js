/**
 * Problem: Get the middle element(s) of an array
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: getMiddleElement([1, 2, 3, 4, 5])
// Output: 3

// Input: getMiddleElement([1, 2, 3, 4])
// Output: [2, 3]

function getMiddleElement(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return null;
    }
    let middle = Math.floor(arr.length / 2);
    if(arr.length % 2 !== 0){
        return arr[middle]; 
    } else {
        return [arr[middle - 1], arr[middle]];
    }
}

module.exports = {
    getMiddleElement
};