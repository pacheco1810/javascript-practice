/**
 * Problem: Analyze word length statistics in a string
 * Topic: Strings
 * Difficulty: Easy
 */

// Input: countWordsByLength("Hello world this is a code test")
// Output: { 5: 2, 4: 3, 2: 1, 1: 1 }

function countWordsByLength(str){
    const words = str.trim().split(/\s+/);
    if(words.length === 1 && words[0] === "") return {};
    
    return words.reduce((acc, word) => {
        acc[word.length] = (acc[word.length] ?? 0) + 1;
        return acc;
    }, {});
}

// Input: groupWordsByLength("Hello world this is a code test")
// Output: { 5: ["Hello", "world"], 4: ["this", "code", "test"], 2: ["is"], 1: ["a"] }

function groupWordsByLength(str){
    const words = str.trim().split(/\s+/);
    if(words.length === 1 && words[0] === "") return {};
    
    return words.reduce((acc, word) => {
        acc[word.length] = acc[word.length] || [];
        acc[word.length].push(word);
        return acc;
    }, {});
}

// Input: getMostCommonLength("Hello world this is a code test")
// Output: 4

function getMostCommonLength(str){
    const words = groupWordsByLength(str);
    if(Object.keys(words).length === 0) return 0;
    
    return Object.entries(words).reduce((acc, [length, wordList]) => {
        if(wordList.length > acc.max){
            acc.max = wordList.length;
            acc.length = Number(length);
        }
        return acc;
    }, {length: 0, max: 0}).length;
}

// Input: getLongestWord("Hello world this is a code test")
// Output: ["Hello", "world"]

function getLongestWord(str){
    const words = str.trim().split(/\s+/);
    if(words.length === 1 && words[0] === "") return [];
    
    return words.reduce((acc, word) => {
        if(word.length > acc.maxLength){
            acc.maxLength = word.length;
            acc.words = [word];
        } else if(word.length === acc.maxLength){
            acc.words.push(word);
        }
        return acc;
    }, {words: [], maxLength: 0}).words;
}

module.exports = {
    countWordsByLength,
    groupWordsByLength,
    getMostCommonLength,
    getLongestWord
};