/**
 * Problem: Count down from n to 1 and then return "takeoff!"
 * Topic: Recursion
 * Difficulty: Easy
 */

// Input: countDown(3)
// Output: console.logs: 3, 2, 1 and returns "takeoff!"

function countDown(n) {
    if (n === 0) return "takeoff!";

    console.log(n);
    
    return countDown(n - 1);
}

module.exports = {
    countDown
};