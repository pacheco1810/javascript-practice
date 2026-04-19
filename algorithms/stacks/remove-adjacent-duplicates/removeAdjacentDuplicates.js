/**
 * Problem: Remove all adjacent duplicates in a string using a stack
 * Topic: Stacks
 * Difficulty: Easy
 */

// Input: removeDuplicates("abbaca")
// Output: "ca"

function removeDuplicates(s){
    let stack = [];

    for(let char of s){
        if(stack.length && stack[stack.length - 1] === char) stack.pop();
        else stack.push(char);
    }
    return stack.join("");
}

module.exports = {
    removeDuplicates
};