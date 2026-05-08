/**
 * Problem: Find the difference between the largest and smallest numbers in an array
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: differenceByFor([5, 10, 2, 8, 3])
// Output: 8

function differenceByFor(arrNumbers){
    if(arrNumbers.length === 0) return 0; 
    let min = Infinity;
    let max = -Infinity;
    
    for(let number of arrNumbers){
        if(number < min){
        min = number;
        }
        if(number > max){
        max = number;
        }
    }
    
    return max - min;
}

// Input: differenceBySort([5, 10, 2, 8, 3])
// Output: 8

function differenceBySort(arrNumbers){
    if(arrNumbers.length === 0) return 0; 
    const arrOrdered = [...arrNumbers].sort((a, b) => a - b);
    return arrOrdered[arrOrdered.length - 1] - arrOrdered[0]; 
}

// Input: differenceByReduce([5, 10, 2, 8, 3])
// Output: 8

function differenceByReduce(arrNumbers){
    return arrNumbers.reduce((acc, number) => {
        if(number > acc.max){
        acc.max = number;
        }
        if(number < acc.min){
        acc.min = number;
        }
        acc.difference = acc.max - acc.min;
        return acc; 
    }, {min: Infinity, max: -Infinity, difference: 0}).difference; 
}

module.exports = {
  differenceByFor,
  differenceBySort,
  differenceByReduce
};