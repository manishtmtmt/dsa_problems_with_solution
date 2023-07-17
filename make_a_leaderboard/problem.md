## **Make Leaderboard**

You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

- If two students get same marks they get same rank

- If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)

- The student placed next to the same marks students will get the rank skipping the intermediate ranks.

#### **Input Format**

-

#### **Output Format**

- 

#### **Sample Input**
    input: 6
           rancho 45
           chatur 32
           raju 30
           farhan 28
           virus 32
           joy 45 

#### **Sample Output**
    output: 1 joy
            1 rancho
            3 chatur
            3 virus
            5 raju
            6 farhan

#### **Constraints**
    N < 100