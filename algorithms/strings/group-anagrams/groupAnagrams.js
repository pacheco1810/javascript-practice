/**
 * Problem: Group words that are anagrams of each other
 * Topic: Strings
 * Difficulty: Medium
 */

// Input: groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(words){
    const result = words.reduce((acc, word) => {
        let key = word
            .toLowerCase()
            .split("")
            .sort()
            .join("");
        
        acc[key] = acc[key] || [];
        acc[key].push(word);
        
        return acc;
    }, {});
    
    return Object.values(result);
}

module.exports = {
    groupAnagrams
};