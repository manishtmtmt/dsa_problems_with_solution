## **Three Max, Three Min Please**

Given an array of N integers, print the 3 distinct maximum and 3 distinct minimum elements of the array.

#### **Input Format**

- First line contains N

- Second line contains N space seperated integers which are elements of the array.

#### **Output Format**

- In the first line, print the least 3 values (sorted) present in the array.

- In the second line, print the least 3 values (sorted) present in the array.

- In case there are not 3 min value, print "Not Possible" (without quotes).

- In case there are not 3 max value, print "Not Possible" (without quotes).

- So, according to the above statements, if both are not possible, you have to print "Not Possible" twice (once for each)

- In the array, if you found out only 2 distinct min and 2 distinct max elements then also print Not Possible twice [one for minimum and other for maximum]

#### **Sample Input**
    input: 8
           1 2 3 4 2 1 6 5 

#### **Sample Output**
    output: 1 2 3
            4 5 6

#### **Constraints**
    1 <= N <= 100

    The values present in the array can be negative as well.