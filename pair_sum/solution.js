function pairSum(N,arr){
    var count = 0;
    for (var i=0; i<N-1; i++) {
        var sum = 0; 
        for (var j=i; j<=i+1; j++){
            sum = sum + arr[j]
        }
        if(sum%2==0) count++
    }
    console.log(count)
}