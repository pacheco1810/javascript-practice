// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]


// Solution 1 — Classic loop
function removeDuplicatesClassic(arr) {
    let result = [], flag = 0;

    for(let number of arr){
        if(result.includes(number)) continue;
        else result.push(number);
    }

    /*Otra opción sin usar includes;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < result.length; j++){
            if(arr[i] === result[j]) flag = 1;
        }
        if(flag === 0){
            result.push(arr[i]);
        }
        flag = 0;
    }*/
    
    return result;
}



// Solution 2 — forEach
function removeDuplicatesForEach(arr) {
    let result = [];
    arr.forEach(num => {
        if(!result.includes(num)) result.push(num);
    });

    return result;
}



// Solution 3 — filter / Set
function removeDuplicatesFilter(arr) {
    // OPTION A (filter)
    return arr.filter((num, index) => arr.indexOf(num) === index);
    // 2. Compare indexOf with current index

    /* OPTION B (Set)
    return [...new Set(arr)];*/
}


module.exports = {
  removeDuplicatesClassic,
  removeDuplicatesForEach,
  removeDuplicatesFilter
};