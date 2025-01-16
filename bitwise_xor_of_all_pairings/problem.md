## **Bitwise XOR of All Pairings**

`Medium`

You are given two **0-indexed** arrays, `nums1` and `nums2`, consisting of non-negative integers. There exists another array, `nums3`, which contains the bitwise XOR of **all pairings** of integers between `nums1` and `nums2` (every integer in `nums1` is paired with every integer in `nums2` **exactly once**).

Return the **bitwise XOR** of all integers in `nums3`.


#### **Sample Input**
    nums1 = [2,1,3], nums2 = [10,2,5,0]

#### **Sample Output**
    13

#### **Explanation**
    A possible nums3 array is [8,0,7,2,11,3,4,1,9,1,6,3].
    The bitwise XOR of all these numbers is 13, so we return 13.

#### **Constraints**
    1 <= nums1.length, nums2.length <= 10^5
    0 <= nums1[i], nums2[j] <= 10^9