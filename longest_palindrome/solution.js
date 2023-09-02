/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const charCounts = {};
    let palindromeLength = 0;
    let hasOddCount = false;
    
    // Count the frequency of each character
    for (const char of s) {
        if (!charCounts[char]) {
            charCounts[char] = 0;
        }
        charCounts[char]++;
    }
    
    // Determine the length of the longest palindrome
    for (const charCount of Object.values(charCounts)) {
        if (charCount % 2 === 0) {
            palindromeLength += charCount;
        } else {
            palindromeLength += charCount - 1;
            hasOddCount = true;
        }
    }
    
    if (hasOddCount) {
        palindromeLength++;
    }
    
    return palindromeLength;
};