## **Segregation of Odd & Even**

- You are given an array, of size `N`

- You have to divide the array into two parts, `even` and `odd`, such that all the even elements in the array are present in the `even`, while all the odd parts in the array are present in the `odd` part

- You are given another integer `q`, which has a value of either `1` or `2`
 
- If the value of `q==1`, print all the even elements in the array followed by all the odd elements in the array, otherwise print all the odd elements in the array followed by all the even elements in the array

#
  Note : The relative order of odd and even elements among themselves should be the same as in the original array



#### **Input Format**

- The first line of the input contains `T`, the number of test cases

- The next line contains the value of `N`

- The next line contains `N` space separated integers, denoting the value of the array

- The last line of each test case contains the value of `q`

#### **Output Format**

- Print the output according to the condition mentioned in the problem statement, for each test case, on a new line

#### **Sample Input**
    input: 2
           5
           1 2 3 4 5
           1
           5
           1 2 3 4 5
           2 

#### **Sample Output**
    output: 2 4 1 3 5
            1 3 5 2 4

#### **Constraints**
   - 1 <= `T` <= 10
    
   - 1 <= `N` <= 500

   - 1 <= `q` <= 2 