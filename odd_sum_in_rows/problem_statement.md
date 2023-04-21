## **Odd Sum in Rows**

- You are given a 2D array, whose dimensions are stored in two variables with the name `N` and `M`

- The value stored in `N` denotes the number of rows, and the value in `M` denotes the number of columns

- The 2D array is stored in a variable with the name `arr`

- For all rows, you have to print the sum of odd elements present in the row

- For example, consider the value stored in `N = 3`, `M = 3`, and the array is `arr = [1,2,3],[4,5,6],[7,8,9]` then the required output will be
#
    4 (Odd numbers in the row are, [1,3]. Therefore, the sum becomes 4)
    5 (Odd numbers in the row are, [5]. Therefore, the sum becomes 5)
    16 (Odd numbers in the row are, [7,9]. Therefore, the sum becomes 16)

#### **Input Format**

- The first line of the input contains the value stored in `N` and `M`

- The next `N` lines contain `M` values each denoting the value stored in `arr`

#### **Output Format**

- For each row, print the sum of even numbers present in the row, line by line

#### **Sample Input**
    input:  3 3
            1 2 3
            4 5 6
            7 8 9

#### **Sample Output**
    output: 4
            5
            16
