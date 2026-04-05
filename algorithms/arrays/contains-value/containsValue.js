/**
 * Problem: Check if an array contains a specific value
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: containsWithFilter([10, 20, 30], 50)
// Output: false

function containsWithFor(arr, value){
    for(let i of arr){
        if(i === value) return true; 
    }
    return false; 
}

function contains(arr, value){
    return arr.includes(value); 
}

function containsWithFilter(arr, value){
    return arr.filter(num => num === value).length > 0 ? true : false;
}

module.exports = {
    containsWithFor,
    contains,
    containsWithFilter
};