## **Two Sum**

Given a sorted array od integers, return indices of two numbers such that they add up to a target value.

Print -1 -1 if not found.

#### **Input Format**

- First line contains Tc, number of test cases.

- Second line contains N and B where N is the size of the array and B is the target sum

#### **Output Format**

- Two values a, b i.e. indexes of any two elements that are found else -1 -1 if not found . Indexing is 0 based indexing. if multiple solutions exist, output the one with the lowest value of a and b.

- Note - the answer should print the smaller index first followed by the larger index. The smallest such index pair should be printed.

- If we have 2 sorted pairs [a1, b1] and [a2, b2], the first pair is said to be smaller than the second one if  a1 < a2 or (a1 == a2 and b1 < b2) 

#### **Sample Input**
    input: 3
           4 9
           2 7 11 15
           5 10
           1 2 3 5 5
           2 100
           48 49 

#### **Sample Output**
    output: 0 1 
            3 4 
            -1 -1

#### **Constraints**
    1 <= Tc <= 10

    2 <=N <= 1000, 2 <= B <= 3*10^5

    1 <= Ai <= 10^5