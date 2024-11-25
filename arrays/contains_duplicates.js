/**
 * Problem: Contains Duplicate
 * Difficulty: Easy
 * Platform: LeetCode
 * Link: https://leetcode.com/problems/contains-duplicate/
 *
 * Description: Given an integer array nums, return true if any value appears at least twice in the array,
 *              and return false if every element is distinct.
 *
 * Solution: Use a Set to track unique elements. If a duplicate is found, return true.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var containsDuplicate = function(nums) {
    const seen = new Set(); // Use a set to track unique elements

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true; // Duplicate found
        }
        seen.add(nums[i]);
    }

    return false; // No duplicates found
};

// Example usage:
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 1])); // Output: true
