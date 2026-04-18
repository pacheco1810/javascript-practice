/**
 * Problem: Reverse each word in a string but keep the word order
 * Topic: Strings
 * Difficulty: Easy
 */

// Input: reverseWordsClassic("javascript is fun")
// Output: "tpircsavaj si nuf"

// Solution 1 — Classic for loop
function reverseWordsClassic(strValue) {
    let result = "";
    let wordAct = "", wordArr = [], separator = " ";
    for(let i = 0; i < strValue.length; i++){
        if(strValue[i] !== separator){
            wordAct += strValue[i];
        } else {
            wordArr.push(wordAct);
            wordAct = "";
        }
    }
    wordArr.push(wordAct);
    
    for(let word = 0; word < wordArr.length; word++){
        for(let char = wordArr[word].length - 1; char >= 0; char--){
            result += wordArr[word][char];
        }
        if(wordArr[word + 1] !== undefined) result += " ";
    }
    return result; 
}

// Input: reverseWordsLoop("javascript is fun")
// Output: "tpircsavaj si nuf"

// Solution 2 — for...of loop
function reverseWordsLoop(strValue){
    const arrWords = strValue.split(" ");
    let result = "";
    for(let word of arrWords){
        result += word.split("").reverse().join("") + " ";
    }
    return result.trim(); 
}

// Input: reverseWordsFunctional("javascript is fun")
// Output: "tpircsavaj si nuf"

// Solution 3 — Functional approach (map)
function reverseWordsFunctional(strValue){
    const arrWords = strValue.split(" ");
     
    return arrWords.map(word => word.split("").reverse().join("")).join(" ");
}

module.exports = {
    reverseWordsClassic,
    reverseWordsLoop,
    reverseWordsFunctional
};