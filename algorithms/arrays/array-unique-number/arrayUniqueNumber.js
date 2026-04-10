/**
 * Problem: Various array operations using Sets
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: getUniqueNumbers([1, 2, 2, 3, 3, 3])
// Output: [1, 2, 3]

function getUniqueNumbers(arr){
    const uniqueNumbers = [...new Set(arr)]; 
    return uniqueNumbers;
}

// Input: hasDuplicates([1, 2, 2, 3])
// Output: true

function hasDuplicates(arr){
    if(new Set(arr).size === arr.length) return false;
    return true; 
}

// Input: getFirstDuplicate([2, 1, 3, 1, 2])
// Output: 1

function getFirstDuplicate(arr){
    const seen = new Set();
    for(let num of arr){
        if(seen.has(num)) return num;
        seen.add(num);
    }
    return null;
}

// Input: getArrayIntersection([1, 2, 3], [2, 3, 4])
// Output: [2, 3]

function getArrayIntersection(arr, arr2){
    const b = new Set(arr2);
    return [...new Set(arr.filter(num => b.has(num)))];
}

// Input: getArrayDifference([1, 2, 3], [2, 3, 4])
// Output: [1, 4]

function getArrayDifference(arr, arr2){
    return [...new Set([...arr.filter(num => !arr2.includes(num)), ...arr2.filter(num => !arr.includes(num))])]; 
}

module.exports = {
    getUniqueNumbers,
    hasDuplicates,
    getFirstDuplicate,
    getArrayIntersection,
    getArrayDifference
};