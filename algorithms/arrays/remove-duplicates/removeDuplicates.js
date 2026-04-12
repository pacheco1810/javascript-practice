/**
 * Problem: Remove duplicate values from an array
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: removeDuplicatesClassic([1, 2, 2, 3, 4, 4])
// Output: [1, 2, 3, 4]

// Solution 1 — Classic loop
function removeDuplicatesClassic(arr) {
    let result = [];

    for(let number of arr){
        if(result.includes(number)) continue;
        else result.push(number);
    }
    
    return result;
}

// Input: removeDuplicatesForEach([1, 2, 2, 3, 4, 4])
// Output: [1, 2, 3, 4]

// Solution 2 — forEach
function removeDuplicatesForEach(arr) {
    let result = [];
    arr.forEach(num => {
        if(!result.includes(num)) result.push(num);
    });

    return result;
}

// Input: removeDuplicatesFilter([1, 2, 2, 3, 4, 4])
// Output: [1, 2, 3, 4]

// Solution 3 — filter
function removeDuplicatesFilter(arr) {
    return arr.filter((num, index) => arr.indexOf(num) === index);
}

module.exports = {
    removeDuplicatesClassic,
    removeDuplicatesForEach,
    removeDuplicatesFilter
};