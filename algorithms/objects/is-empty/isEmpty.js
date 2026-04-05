/**
 * Problem: Check if an object is empty
 * Topic: Objects
 * Difficulty: Easy
 */

// Input: isEmptyByJSON({1:'a', 2:'b', 3:'c', 4:'d', 5:'e'})
// Output: false

function isEmptyByFor(obj){
    for(let i in obj){
        return false; 
    }
    return true;
}

function isEmptyByKeys(obj){
    return Object.keys(obj).length === 0;
}

function isEmptyByJSON(obj){
    return JSON.stringify(obj) === '{}';
}

module.exports = {
    isEmptyByFor,
    isEmptyByKeys,
    isEmptyByJSON
};