/**
 * Problem: Analyze text to count word frequency and find most frequent words
 * Topic: Strings
 * Difficulty: Easy
 */

// Input: analyzeText("Hello world hello WORLD test Test")
// Output: {
//   wordCount: { hello: 2, world: 1, test: 2 },
//   mostFrequent: ["hello", "test"],
//   uniqueWords: 3
// }

const text = "Hello world hello WORLD test Test";

function analyzeText(text){
    const words = text.toLowerCase().replace(/\s+/g, ' ').trim().split(" ").filter(word => word !== "");
    
    const wordCount = words.reduce((acc, word) =>{
        acc[word] = (acc[word] ?? 0) + 1;
        return acc;
    }, {});
    
    let max = 0;
    const mostFrequent = Object.entries(wordCount).reduce((acc, [word, count]) => {
        if(count > max){
            max = count;
            return [word];
        } else if(count === max){
            acc.push(word);
        }
        return acc;
    }, []);
    
    return {
        wordCount,
        mostFrequent,
        uniqueWords: Object.keys(wordCount).length
    };
}

module.exports = {
    analyzeText
};