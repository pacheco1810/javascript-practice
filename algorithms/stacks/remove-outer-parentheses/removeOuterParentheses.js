/**
 * Problem: Remove the outermost parentheses of every primitive string
 * Topic: Stacks / Depth Counter
 * Difficulty: Easy
 */

// Input: removeOuterParentheses("(()())(())")
// Output: "()()()"
// Input: removeOuterParentheses("(()())(())(()(()))")
// Output: "()()()()(())"

function removeOuterParentheses(s){
    let stack = [];
    let depth = 0;
  
    for(let char of s){
        if(char === "("){
            if(depth > 0) stack.push(char);
            depth++;
        } else if(char === ")"){
            depth--;
            if(depth > 0) stack.push(char);
        } 
    }
  
    return stack.join(""); 
}

module.exports = {
    removeOuterParentheses
};