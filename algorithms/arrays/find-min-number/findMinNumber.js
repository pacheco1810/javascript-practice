/**
 * Problem: Find the minimum number in an array
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: minNumberByFind([2, 5, 8, 1, 3])
// Output: 1

function minNumberByFor(arr){
    let response = 0, flag;
    for(let num = 0; num < arr.length; num++){
        let number = arr[num]; 
        for(let digits = 0; digits < arr.length; digits++){
             if(number <= arr[digits]){
                 flag = 1;
                 continue;
             }
             else{
                 flag = 0; 
                 break;
             }
        }
        if(flag === 1){
            response = number;
            break;
        }
    }
    return response;
}

function minNumberByFind(arr){
    return arr.find(num => num === Math.min(...arr));
}

function minNumberByMathMin(arr){
    return Math.min(...arr);
}

module.exports = {
    minNumberByFor,
    minNumberByFind,
    minNumberByMathMin
};