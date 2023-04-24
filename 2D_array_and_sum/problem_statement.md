## **2D Array and Sum**

You are given an array `matrix` of `n` rows and `m` columns which contains positive integers and sum `s`.

You need to find occurrences of the sum of three consecutive numbers (i.e., x, y, and z) whose sum is equal to s appear horizontally, vertically and diagonally in the given matrix.

![2D_array_and_sum](https://s3.amazonaws.com/hr-assets/0/1592214730-01062d2a55-S2DSumcreenshot.png)

#### **Input Format**

- First line: Three integers n, m and s, where n denotes the number of rows, m denotes the number of columns in the matrix and s is the sum.

Next n lines: Each line contains m characters which contain positive integers only.

#### **Output Format**

- Print the number of times the sum s appear in the matrix.

#### **Sample Input**
    input:  3 3 6
            3 2 1
            2 2 2
            1 5 1

#### **Sample Output**
    output: 4

#### **Constraints**
    1 <= s <= 50
    1 <= n, m <= 10