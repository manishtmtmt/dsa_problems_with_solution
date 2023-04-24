## **Spiral Traversal (Rectangular Matrix)**

You are given a matrix of size `N * M`.

Print the spiral traversal of the matrix.

Refer the image given below:

![spiral_traversal](https://prod-oj-files.s3.ap-south-1.amazonaws.com/upload/535fd5c54b.png)

#### **Input Format**

The first line of the input contains T, the number of test cases.

The first line of each test case contains N and M, the number of rows and columns in the given matrix.

The next N lines contain M values each denoting the elements of the matrix.

#### **Output Format**

For each test case, print the spiral traversal of the matrix, on a single line, on a new line.

#### **Sample Input**
    input:  2
            3 4
            1 2 3 4
            5 6 7 8
            9 10 11 12
            4 3
            1 2 3
            4 5 6
            7 8 9
            10 11 12

#### **Sample Output**
    output: 1 5 9 10 11 12 8 4 3 2 6 7
            1 4 7 10 11 12 9 6 3 2 5 8

#### **Constraints**
    1 <= T <= 10
    1 <= N, M <= 200
    1 <= A[i][j] <= 200