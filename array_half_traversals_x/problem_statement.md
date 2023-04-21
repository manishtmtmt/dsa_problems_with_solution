## **Array Half Traversals X**

- You are given an even sized array stored in a variable with the name `arr`

- The size of the array is stored in a variable with the value `N`

- You have to solve the following equation `7 * c1 + 2 * c2`, such at

####
    c1 -> The sum of the values of the first half of the array

    c2 -> The sum of the values of the second half of the array

- Consider the value stored in `N = 6`, and `arr = [ 1 2 3 4 5 6]`

- Therefore, the first half of the array is `[1 2 3]`, whose sum is `1 + 2 + 3 = 6`

- Similarly, the second half of the array is `[4 5 6]`, whose sum is `4 + 5 + 6 = 15`

- Therefore, the value of the equation `7 * 6 + 2 * 15 = 42 + 30 = 72`, which is the required output.

#### **Sample Input**
    input: 6
           1 2 3 4 5 6 

#### **Sample Output**
    output: 7