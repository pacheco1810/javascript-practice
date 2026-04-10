/**
 * Problem: Count how many times each word appears in a string
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: countWordsClassic("hello world hello")
// Output: { hello: 2, world: 1 }

// Solution 1 — Classic loop
function countWordsClassic(strValue) {
    let word = "", words = [], countObj = {};
    const separator = " ";
    for(let i = 0; i < strValue.length; i++){
        if(strValue[i] === separator){
            words.push(word);
            word = ""; 
            continue;
        }else{
            word += strValue[i]; 
        }
    }
    words.push(word);
    for (let word of words){
        if(word === "") continue; 
        countObj[word] = (countObj[word] || 0) + 1;
    }
    return countObj; 
}

// Input: countWordsForEach("hello world hello")
// Output: { hello: 2, world: 1 }

// Solution 2 — forEach
function countWordsForEach(strValue) {
    const words = strValue.split(" ").filter(word => word !== "");
    let countObj = {};
    words.forEach(word => {
        countObj[word] = (countObj[word] || 0) + 1;
    });
    return countObj;
}

// Input: countWordsReduce("hello world hello")
// Output: { hello: 2, world: 1 }

// Solution 3 — reduce
function countWordsReduce(strValue) {
    const words = strValue.split(" ").filter(word => word !== "");
    return words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});   
}

module.exports = {
    countWordsClassic,
    countWordsForEach,
    countWordsReduce
};