/**
 * Problem: Compare two strings after processing backspace characters using stack
 * Topic: Stacks
 * Difficulty: Easy
 */

// Input: backspaceCompare("ab#c", "ad#c")
// Output: true

function backspaceCompare(s, t){
    let stack = [[], []];
    
    for(let char of s){
        if(char === "#"){
            if(stack[0].length) stack[0].pop();
            continue;
        } else {
            stack[0].push(char);
        }
    }
    
    for(let char of t){
        if(char === "#"){
            if(stack[1].length) stack[1].pop();
            continue;
        } else {
            stack[1].push(char);
        }
    }
    
    return stack[0].join("") === stack[1].join("");
}

module.exports = {
    backspaceCompare
};