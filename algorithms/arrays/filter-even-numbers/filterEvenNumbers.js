// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

// Solution 1 — Classic loop
function filterEvenNumbersClassic(arr) {
    let result = [];
    for(let number of arr){
        if(number % 2 === 0){
            result.push(number);
        }
    }
    return result;
}



// Solution 2 — forEach
function filterEvenNumbersForEach(arr) {
    let result = [];
    
    arr.forEach(number => {
        if(number % 2 === 0){
            result.push(number);
        } 
    });
    
    return result;
}

// Solution 3 — filter
function filterEvenNumbersFilter(arr) {
    return arr.filter(number => number % 2 === 0); 
}

module.exports = {
  filterEvenNumbersClassic,
  filterEvenNumbersForEach,
  filterEvenNumbersFilter
};