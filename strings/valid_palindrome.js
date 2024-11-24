/**
 * Valid Palindrome
 * Problem: Check if a given string is a valid palindrome, ignoring case and non-alphanumeric characters.
 * 
 * Approach: 
 * 1. Clean the string to keep only alphanumeric characters and convert to lowercase.
 * 2. Use two pointers or reverse the string to check for palindrome property.
 * 
 * Time Complexity: O(n), where n is the length of the string.
 * Space Complexity: O(n), due to the cleaned string and reversed string.
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // step 1: removes non-alphabetic characters and convert it into lowercase
    const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // step 2: check if string is equal if its reverse
    const reversedString = cleanString.split("").reverse().join("");

    return cleanString === reversedString;
};

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
