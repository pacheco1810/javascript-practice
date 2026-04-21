/**
 * Problem: Calculate the result of a simple expression with + and - operators
 * Topic: Stacks
 * Difficulty: Easy
 */

// Input: calculateSimple("7-2+4")
// Output: 9

function calculateSimple(s){
    let stack = [];
    let currentNumber = 0;
    let sign = 1;
    
    for(let item of s){
        if(/[0-9]/.test(item)){
            currentNumber = currentNumber * 10 + Number(item);
        } else if(item === "+" || item === "-"){
            stack.push(sign * currentNumber);
            currentNumber = 0;
            sign = item === "+" ? 1 : -1;
        }
    }
    stack.push(sign * currentNumber);
    
    return stack.reduce((acc, num) => acc + num, 0);
}

module.exports = {
    calculateSimple
};