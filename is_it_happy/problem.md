## **Is It Happy?**

A happy number is a number defined by the following process: Starting with any positive, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

#### **Input Format**

- First line contain t, which is the test cases 
 
- Next t lines consist of an integer N.

#### **Output Format**

- true if it is happy else false

    description for 19,

    1^2 + 9^2 = 82
    8^2 + 2^2 = 68
    6^2 + 8^2 = 100
    1^2 + 0^2 + 0^2 = 1

#### **Sample Input**
    input: 3 
           19
           2 
           312082396 

#### **Sample Output**
    output: true
            false
            true

#### **Constraints**
    1 <= t <= 1000
    1 <= N <= 1e9