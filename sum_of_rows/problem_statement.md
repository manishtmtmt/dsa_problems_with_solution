## **Sum of Rows**

- You are given a 2D array, whose dimensions are stored in two variables with the name `N` and `M`

- The value stored in `N` denotes the number of rows, and the value in `M` denotes the number of columns

- The 2D array is stored in a variable with the name `arr`

- You have to print the sum of all elements in a row, on a new line

- For example, consider the value stored in `N = 3`, `M = 2`, and  the array is `arr = [1, 2], [3, 4], [5, 6]`, the required output will be
#
    3 (Adding the elements of the row [1, 2])
    7 (Adding the elements of the row [3, 4])
    11 (Adding the elements of the row [5, 6])

#### **Input Format**

- The first line of the input contains the value stored in `N` and `M`

- The next `N` lines contain `M` values each denoting the value stored in `arr`

#### **Output Format**

- Print the sum of each row, on a new line. You have to do this for all rows of the matrix

#### **Sample Input**
    input:  3 2
            1 2
            3 4
            5 6

#### **Sample Output**
    output: 3
            7
            11

#### **Constraints**
    1 <= N <= 50