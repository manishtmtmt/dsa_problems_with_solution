## **Masai Quiz Competition**

Masai School is organizing a quiz competition, but it wants only those people to participate, who are willing. Therefore, it is not mandatory to participate for everyone

Also, student can form groups of any sizes to participate in the competition.

All the students are standing in a queue, and are holding cards with value on them either 0 or 1. 1 indicates a student is participating, while 0 indicates that a student is not participating. All the students that are standing together, and are participating, that means holding a card with a value 1, are in the same team.

You have to find the number of groups participating in the quiz

Note: It is possible that all the students fall in one single group

#### **Input Format**

- The first line of the input contains `T`, the number of test cases

- The first line of each test case, contains `N`, the total number of students

-Next line contains `N` space separated integers having values either 0 or 1

#### **Output Format**

- For each test case, print a single integer denoting a single value, the number of groups participating, on a new line

#### **Sample Input**
    input: 5
           1 1 0 1 1
           4
           1 1 1 1 

#### **Sample Output**
    output: 2
            1

#### **Constraints**
    1 <= T <= 10
    1 <= N <= 10^6
    0 <= A[i] <= 1