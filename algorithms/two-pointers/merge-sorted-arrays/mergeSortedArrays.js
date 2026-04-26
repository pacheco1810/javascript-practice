/**
 * Problem: Merge two sorted arrays into one sorted array
 * Topic: Two Pointers
 * Difficulty: Easy
 */

// Input: mergeSortedArrays([1,3,5], [2,4,6])
// Output: [1,2,3,4,5,6]
// Input: mergeSortedArrays([1,3,5], [2,4,6,7,8])
// Output: [1,2,3,4,5,6,7,8]

function mergeSortedArrays(nums1, nums2){
    let left = 0;
    let right = 0;
    let result = [];
  
    while(left < nums1.length && right < nums2.length){
        if(nums1[left] < nums2[right]){
            result.push(nums1[left]);
            left++;
        } else {
            result.push(nums2[right]);
            right++;
        }
    }
  
    if(left !== nums1.length){
        result.push(...nums1.slice(left));
    } else {
        result.push(...nums2.slice(right)); 
    }
  
    return result;
}

module.exports = {
    mergeSortedArrays
};