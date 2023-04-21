function battleOfOddAndEven(n, arr){
    var evenSum = 0;
    var oddSum = 0;
    for(var i=0; i<n; i++) {
        if(arr[i]%2==0){
            evenSum+=arr[i]
        }else{
            oddSum += arr[i]
        }
    }
    if (evenSum<oddSum) {
        console.log("Odd")
    }
    else {
        console.log("Even")
    }
}