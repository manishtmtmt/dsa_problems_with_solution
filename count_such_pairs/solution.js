function countSuchPairs(N,K,A){
    var count = 0;
    for (var i=0; i<N; i++) {
        var sum = 0;
        for (var j=i+1; j<N; j++) {
            sum = sum + A[i] + A[j];
            if (sum==K) {
                count++;
            }
            sum = 0;
        }
    }
    console.log(count)
}