/**
 * Problem: Find the maximum number of consecutive 1's in a binary array
 * Topic: Sliding Window
 * Difficulty: Easy
 */

// Input: maxConsecutiveOnes([1,1,0,1,1,1])
// Output: 3
// Input: maxConsecutiveOnes([1,0,1,1,0,1])
// Output: 2

function maxConsecutiveOnes(nums){
    let counter = 0;
    let currentStreak = 0; 
    for(let num of nums){
        if(num === 1) {
            currentStreak++;
        } else {
            currentStreak = 0; 
        }
        counter = Math.max(counter, currentStreak);
    }
    return counter;
}

module.exports = {
    maxConsecutiveOnes
};