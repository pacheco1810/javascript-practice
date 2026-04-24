/**
 * Problem: Find the minimum number of parentheses to add to make a string valid
 * Topic: Stacks
 * Difficulty: Medium
 */

// Input: minAddToMakeValid("())")
// Output: 1
// Input: minAddToMakeValid("(((")
// Output: 3
// Input: minAddToMakeValid("()))((")
// Output: 4

function minAddToMakeValid(s){
    let stack = [];
    let count = 0;
    for(let char of s){
        if(char === "(") {
            stack.push(char); 
        } else {
            if(stack[stack.length - 1] !== "(") {
                count++; 
            } else {
                stack.pop();
            }
        }
    }
    
    return stack.length + count;
}

module.exports = {
    minAddToMakeValid
};