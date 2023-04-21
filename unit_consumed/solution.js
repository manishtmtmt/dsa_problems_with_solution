function unitsConsumed(n) {
    //write code here
    n = n - 80;
    if (n <= 150){
        console.log(n/3)
    }else if(n > 150 && n <= 650){
        console.log(50+(n-150)/5);
    }else {
        console.log(150+(n-650)/10);
    }
}