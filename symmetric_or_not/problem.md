## **Symmetric Or Not?**

 You are given some matrices consist of only 0's and 1's and you have to pick which are symmetric and which are not

 A matrix is said to be symmetric about X-axis if 1st row is identical to n-th row, 2nd is identical to (n-1)th row and so on.

 A matrix is said to be symmetric about Y-axis if 1st column is identical to the nth column, 2nd identical to (n-1)th and so on for all columns.

 Your task is to print "YES" if it is symmetric about X-axis and Y-axis else "NO"

#### **Input Format**

- First line contains T -number of test cases.

- First line of each test case contains the n size of matrix.

- Next n line contains n characters.

#### **Output Format**

- Print YES or NO in a new line for each test case.

#### **Sample Input**
    input: 5
           2
           11
           11
           4
           0101
           0110
           0110
           0101
           4
           1001
           0000
           0000
           1001
           5
           01110
           01010
           10001
           01010
           01110
           5
           00100
           01010
           10001
           01010
           01110 

#### **Sample Output**
    output: YES
            NO
            YES
            YES
            NO

