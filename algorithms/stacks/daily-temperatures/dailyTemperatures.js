/**
 * Problem: Find how many days until a warmer temperature for each day
 * Topic: Stacks (Monotonic Decreasing Stack)
 * Difficulty: Medium
 */

// Input: dailyTemperatures([73,74,75,71,69,72,76,73])
// Output: [1,1,4,2,1,1,0,0]

function dailyTemperatures(temps){
    let stack = [];        
    let result = new Array(temps.length).fill(0);

    for(let i = 0; i < temps.length; i++){
        while(stack.length && temps[i] > temps[stack[stack.length - 1]]){
            let prev = stack.pop();
            let days = i - prev; 
            result[prev] = days;
        }
        stack.push(i);
    }
    return result;
}

module.exports = {
    dailyTemperatures
};