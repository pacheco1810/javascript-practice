/**
 * Problem: Find the maximum area of water a container can hold
 * Topic: Two Pointers
 * Difficulty: Medium
 */

// Input: containerWithMostWater([1,8,6,2,5,4,8,3,7])
// Output: 49

function containerWithMostWater(height){
    let left = 0;
    let right = height.length - 1; 
    let maxArea = 0;

    while(left < right){
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
        
        if(height[left] < height[right]) {
            left++;
        } else if(height[left] > height[right]) {
            right--;
        } else {
            left++;
            right--;
        }
    }

    return maxArea;
}

module.exports = {
    containerWithMostWater
};