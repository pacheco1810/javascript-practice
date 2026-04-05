/**
 * Problem: Find the minimum number in an array
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: findMinWithForEach([8, 3, 12, 1, 6])
// Output: 1

// V1 solution: for loop
function findMinWithFor(arr){
    let response = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < response) response = arr[i];
    }
    return response;
}

// V2 solution: Math.min method 
function findMinWithMath(arr){
    return Math.min(...arr); 
}

// V3 solution: forEach method
function findMinWithForEach(arr){
    let response = arr[0];
    arr.forEach(num => {
        if(num < response) response = num;
    });
    return response;
}

module.exports = {
    findMinWithFor,
    findMinWithMath,
    findMinWithForEach
};