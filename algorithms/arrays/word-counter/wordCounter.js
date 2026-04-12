/**
 * Problem: Count and group words by different criteria using reduce
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: countWords(["apple", "banana", "apple", "orange"])
// Output: { apple: 2, banana: 1, orange: 1 }

// Input: countWordsByLength(["apple", "banana", "apple", "orange"])
// Output: { 5: 2, 6: 2 }

// Input: groupWordsByLength(["apple", "banana", "apple", "orange"])
// Output: { 5: ["apple", "apple"], 6: ["banana", "orange"] }

// Input: groupByFirstLetter(["apple", "banana", "apple", "orange"])
// Output: { a: 2, b: 1, o: 1 }

const words = ["apple", "banana", "apple", "orange"];

// Input: countWords(["apple", "banana", "apple", "orange"])
// Output: { apple: 2, banana: 1, orange: 1 }

function countWords(words){
    return words.reduce((acc, word) =>{
        acc[word] = (acc[word] ?? 0) + 1;
        return acc;
    }, {})
}

// Input: countWordsByLength(["apple", "banana", "apple", "orange"])
// Output: { 5: 2, 6: 2 }

function countWordsByLength(words){
    return words.reduce((acc, word) =>{
        const lengthWord = word.length; 
        acc[lengthWord] = (acc[lengthWord] ?? 0) + 1;
        return acc;
    }, {})
}

// Input: groupWordsByLength(["apple", "banana", "apple", "orange"])
// Output: { 5: ["apple", "apple"], 6: ["banana", "orange"] }

function groupWordsByLength(words){
    return words.reduce((acc, word) =>{
        const lengthWord = word.length; 
        acc[lengthWord] = [...(acc[lengthWord] || []), word];
        return acc;
    }, {})
}

// Input: groupByFirstLetter(["apple", "banana", "apple", "orange"])
// Output: { a: 2, b: 1, o: 1 }

function groupByFirstLetter(words){
    return words.reduce((acc, word) =>{
        const firstChar = word[0].toLowerCase(); 
        acc[firstChar] = (acc[firstChar] ?? 0) + 1;
        return acc;
    }, {})
}

module.exports = {
    words,
    countWords,
    countWordsByLength,
    groupWordsByLength,
    groupByFirstLetter
};