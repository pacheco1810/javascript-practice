// Input: firstOrLastPeak([2, 3, 2, 4, 2, 5], false, "last")
// Output: 5

function isPeak(arr, strict, position){
    const left = position > 0 ? arr[position - 1] : null;
    const right = position < arr.length - 1 ? arr[position + 1] : null;
    const compare = strict ? (a, b) => a > b : (a, b) => a >= b;
    
    return (left === null || compare(arr[position], left)) && (right === null || compare(arr[position], right));
}

function firstPeakNumber(arr, strict){
    for(let i = 0; i < arr.length; i++){
        if(isPeak(arr, strict, i)) return arr[i];
    }
    return null;
}

function allPeakNumber(arr, strict){
    let peaks = [];
    for(let i = 0; i < arr.length; i++){
        if(isPeak(arr, strict, i)) peaks.push(arr[i]); 
    }
    return peaks.length > 0 ? peaks : null;
}

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