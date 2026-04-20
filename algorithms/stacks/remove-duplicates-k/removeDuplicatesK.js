/**
 * Problem: Remove adjacent duplicates of exactly k times using a stack
 * Topic: Stacks
 * Difficulty: Medium
 */

// Input: removeDuplicatesK("deeedbbcccbdaa", 3)
// Output: "aa"

function removeDuplicatesK(s, k){
    let stack = [];
    for(let char of s){
        if(stack.length && stack[stack.length - 1][0] === char){
            stack[stack.length - 1][1]++; 
            
            if(stack[stack.length - 1][1] === k){
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }
    
    return stack.map(([ch, co]) => ch.repeat(co)).join("");
}

module.exports = {
    removeDuplicatesK
};