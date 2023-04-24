## **Z Traversal**

Given a square matrix of size N x N. Print the Z traversal of the matrix. Refer the figure below for better understanding.

![z_traversal](https://prod-oj-files.s3.ap-south-1.amazonaws.com/upload/b56cad99e7.png)

#### **Input Format**

The first line of the input contains T, the number of test cases. The first line of each test case contains N, th edimensions of the square matrix.

Next N lines contains N space separated integers, denotiong the values of the matrix.

#### **Output Format**

- For each test case, print the elements that occur in the Z traversal of the matrix, on a new line.

#### **Sample Input**
    input:  1
            3
            1 2 3
            4 5 6
            7 8 9

#### **Sample Output**
    output: 1 2 3 5 7 8 9

#### **Constraints**
    1 <= N <= 500
    1 <= T <= 10
    1 <= A[i][j] <= 1000