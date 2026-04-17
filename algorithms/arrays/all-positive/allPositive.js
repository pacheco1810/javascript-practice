/**
 * Problem: Check if all numbers in an array are positive
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: allNumbersByFor([1, 5, 7, 1])
// Output: true

function allNumbersByFor(numbers){
    for(let number of numbers){
        if(number <= 0) return false;
    }
    return true;
}

// Input: allNumbersByEvery([1, 5, 7, 1])
// Output: true

function allNumbersByEvery(numbers){
    return numbers.every(number => number > 0);
}

module.exports = {
    allNumbersByFor,
    allNumbersByEvery
};