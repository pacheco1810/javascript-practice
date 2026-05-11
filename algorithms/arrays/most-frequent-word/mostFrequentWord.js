/**
 * Problem: Find the most frequent word in an array
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: mostFrequentWord(["apple", "banana", "apple", "orange", "banana", "apple"])
// Output: "apple"

function mostFrequentWord(words){
    if(!Array.isArray(words) || words.length === 0) return null;
    
    let result = words.reduce((acc, word) => {
        if(typeof word !== "string" || word.trim() === ""){
            return acc;
        }
        acc.words[word] = (acc.words[word] ?? 0) + 1;
        if(acc.words[word] > acc.maxCount){
            acc.maxCount = acc.words[word];
            acc.mostFrequent = word;
        }
        return acc;
    }, {words: {}, maxCount: 0, mostFrequent: null});
    
    return result.mostFrequent;
}

module.exports = {
    mostFrequentWord
};