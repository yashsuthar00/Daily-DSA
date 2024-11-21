/**
 * Problem: Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 * 
 * Description:
 * Given an array of integers `nums` and an integer `target`, 
 * return the indices of the two numbers such that they add up to `target`.
 * 
 * Constraints:
 * - Each input has exactly one solution.
 * - You may not use the same element twice.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]} 
 */
function twoSum(nums, target) {
    const numMap = new Map(); 
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return []; 
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // OUTPUT: [0, 1]