## **Go in Zig-Zag**

Given a `matrix` with  `N` rows and `M` columns. Print the matrix elements starting from the top right corner and follow a Zig-Zag pattern.

Look at the image for better understandin

![zig-zag](https://s3.amazonaws.com/hr-assets/0/1597145617-758e6f51c3-CapturedImage-11-08-202017-03-03.png)

#### **Input Format**

- First line contains n and m

- Next n line contains m space separated integers which describe each row of the 2d array

#### **Output Format**

- Print all matrix elements in a single line separated by spaces.

#### **Sample Input**
    input:  5 5
            4 7 1 1 7
            8 9 9 6 1
            6 4 9 5 1
            7 7 4 7 7
            8 6 2 5 5

#### **Sample Output**
    output: 7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8

#### **Constraints**
    m, n <= 50