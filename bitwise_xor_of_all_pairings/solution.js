function xorAllPairings(nums1, nums2) {
  // Compute XOR of all elements in nums1
  let xor1 = 0;
  for (let num of nums1) {
    xor1 ^= num;
  }

  // Compute XOR of all elements in nums2
  let xor2 = 0;
  for (let num of nums2) {
    xor2 ^= num;
  }

  // Determine result based on the length of the arrays
  const len1 = nums1.length;
  const len2 = nums2.length;

  // If len2 is odd, all elements of nums1 contribute; if len1 is odd, all elements of nums2 contribute
  const result = ((len2 % 2) * xor1) ^ ((len1 % 2) * xor2);

  return result;
}

// Example usage:
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
console.log(xorAllPairings(nums1, nums2)); // Output will be the bitwise XOR of all pairings -> 7
