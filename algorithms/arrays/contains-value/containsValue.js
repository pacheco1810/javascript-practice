/**
 * Problem: Check if an array contains a specific value
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: containsWithFor([10, 20, 30], 20)
// Output: true

function containsWithFor(arr, value){
    for(let i of arr){
        if(i === value) return true; 
    }
    return false; 
}

// Input: contains([10, 20, 30], 50)
// Output: false

function contains(arr, value){
    return arr.includes(value); 
}

// Input: containsWithFilter([10, 20, 30], 50)
// Output: false

function containsWithFilter(arr, value){
    return arr.filter(num => num === value).length > 0 ? true : false;
}

module.exports = {
    containsWithFor,
    contains,
    containsWithFilter
};