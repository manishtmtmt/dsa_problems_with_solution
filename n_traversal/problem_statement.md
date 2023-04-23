## **N traversal**

You are given a matrix of size n x n. Find the Nth traversal of the matrix. Refer the following figure for better understanding.

![n_traversal](https://prod-oj-files.s3.ap-south-1.amazonaws.com/upload/ee894391b8.png)

#### **Input Format**

- The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.

- Next N lines contain N space separated integers, denoting the values of the matrix.

#### **Output Format**

- For each test case, print the N traversal of the matrix on a single line, on a new line.

#### **Sample Input**
    input:  1
            3
            1 2 3
            4 5 6
            7 8 9

#### **Sample Output**
    output: 7 4 1 5 9 6 3

#### **Constraints**
    1 <= T <= 10
    1 <= N <= 500
    1 <= A[i][j] <= 1000