## **MinMax**

A critical point in an array is defined as either a local maxima or a local minima.

A element is a local maxima if the current element has value strictly greater than the previous element and the next element.

A element is a local minima if the current element has a value strictly smaller than the previous element and the next element.

Note that a element can only be a local maxima/minima if there exists both a previous element and a next element.

Given an integer array of size N, you have to print minDistance and maxDistance, where minDistance is the minimum distance between any two distinct critical points and maxDistance is the maximum distance between any two distinct critical points. If there are fewer than two critical points, minDistance = -1, and maxDistance = -1.

#### **Input Format**

- First-line contains T, no of test cases

- First line of each test case contains an integer numbers n - the size of the array.

- Second line of each test case contains n integer numbers a1, a2, ...an --- elements of the array

#### **Output Format**

- For each test case print the minDistance and maxDistance, in a new line

#### **Sample Input**
    input:  3
            2
            3 1
            7
            5 3 1 2 5 1 2
            9
            1 3 2 2 3 2 2 2 7

#### **Sample Output**
    output: -1 -1
            1 3
            3 3

#### **Constraints**
    1 <= T <= 10
    1 <= n <= 10^6
    1 <= a[i] <= 10^5