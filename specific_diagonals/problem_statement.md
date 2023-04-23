## **Specific Diagonals**

Given a `matrix` of `R` rows and `C` columns which contains distinct integers and you are given a integer `K` and you need to print both the diagonals crossing through the given element `K`, you can always assumen that given element always exist in the matrix.

![specific_diagonals](https://prod-oj-files.s3.ap-south-1.amazonaws.com/upload/d9a6297b7c.png)

`Note:` You need to print the diagonal from top to bottom also make sure you print the diagonals going from `left to right` first then diagonal going `right to left` on a new lines.

#### **Input Format**

- The first line of input will contain two integers R and C, denoting the Rows and Columns of the Matrix.

Next R (rows) lines contain C integers each denoting the matrix elements.

The next line will contain an integer K, denoting the element for which we need to print the diagonals.

#### **Output Format**

- Output both the diagonals containing the given element, print both the diagonals in a new line and from `top to bottom` order.

#### **Sample Input**
    input:  3 3
            1 2 3
            4 5 6
            7 8 9
            6

#### **Sample Output**
    output: 2 6
            6 8

#### **Constraints**
    1 <= R, C <= 100
    1 <= matrix[i][j] <= 10^4
    1 <= K <= 10^4
