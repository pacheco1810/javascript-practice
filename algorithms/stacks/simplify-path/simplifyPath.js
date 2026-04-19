/**
 * Problem: Simplify a Unix-style file path using a stack
 * Topic: Stacks
 * Difficulty: Medium
 */

// Input: simplifyPath("/a/../../b/../c//.//")
// Output: "/c"

function simplifyPath(path){
    let stack = [];
    path = path.trim().split("/");
    for(let i of path){
        if(i === '' || i === '.') continue;
        if(i === '..'){
            if(stack.length > 0) stack.pop();
            else continue;
        } else {
            stack.push(i);
        }
    }
    return "/" + stack.join("/");
}

module.exports = {
    simplifyPath
};