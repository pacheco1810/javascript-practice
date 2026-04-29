/**
 * Problem: Double all positive numbers (>= 0) in an array
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: doublePositivesByForEach([1, -2, 3, -4, 5])
// Output: [2, 6, 10]

function doublePositivesByFor(nums){
    let result = [];
    for(let num of nums){
        if(num >= 0){
            result.push(num * 2);
        }
    }
    return result; 
}

function doublePositivesByFilter(nums){
    return nums.filter(num => num >= 0).map(num => num * 2);
}

function doublePositivesByForEach(nums){
    let result = [];

    nums.forEach(num => {
        if(num >= 0) result.push(num * 2);
    }); 

    return result;
}

function doublePositivesByReduce(nums){
    return nums.reduce((acc, num) => {
        if(num >= 0) acc.push(num * 2);
        return acc;
    }, []);
}

module.exports = {
    doublePositivesByFor,
    doublePositivesByFilter,
    doublePositivesByForEach,
    doublePositivesByReduce
};