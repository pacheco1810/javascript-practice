/**
 * Problem: Find peaks in an array (elements greater than or equal to neighbors)
 * Topic: Arrays
 * Difficulty: Medium
 */

// Input: firstOrLastPeak([2, 3, 2, 4, 2, 5], false, "last")
// Output: 5

// Input: isPeak([1, 2, 1], false, 1)
// Output: true

function isPeak(arr, strict, position){
    const left = position > 0 ? arr[position - 1] : null;
    const right = position < arr.length - 1 ? arr[position + 1] : null;
    const compare = strict ? (a, b) => a > b : (a, b) => a >= b;
    
    return (left === null || compare(arr[position], left)) && (right === null || compare(arr[position], right));
}

// Input: firstPeakNumber([2, 3, 2, 4, 2, 5], false)
// Output: 3

function firstPeakNumber(arr, strict){
    for(let i = 0; i < arr.length; i++){
        if(isPeak(arr, strict, i)) return arr[i];
    }
    return null;
}

// Input: allPeakNumber([2, 3, 2, 4, 2, 5], false)
// Output: [3, 4, 5]

function allPeakNumber(arr, strict){
    let peaks = [];
    for(let i = 0; i < arr.length; i++){
        if(isPeak(arr, strict, i)) peaks.push(arr[i]); 
    }
    return peaks.length > 0 ? peaks : null;
}

// Input: firstOrLastPeak([2, 3, 2, 4, 2, 5], false, "last")
// Output: 5

function firstOrLastPeak(arr, strict, mode){
    if(mode !== "first" && mode !== "last") return null;
    const peaks = allPeakNumber(arr, strict);
    if(peaks === null) return null;
    return mode === "first" ? peaks[0] : peaks[peaks.length - 1];
}

module.exports = {
    isPeak,
    firstPeakNumber,
    allPeakNumber,
    firstOrLastPeak
};