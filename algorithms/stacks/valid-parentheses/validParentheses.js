/**
 * Problem: Check if parentheses in a string are valid and balanced
 * Topic: Stacks
 * Difficulty: Easy
 */

// Input: isValidParentheses("()[]{}")
// Output: true

function isValidParentheses(s){
    const chars = { "(" : ")", "{" : "}", "[" : "]" };
    let stack = [];
    
    for(let char of s){
        if(char === "(" || char === "{" || char === "["){
            stack.push(char);
        } else {
            if(chars[stack[stack.length - 1]] !== char) return false;
            stack.pop();
        }
    }
    
    return stack.length === 0;
}

module.exports = {
    isValidParentheses
};