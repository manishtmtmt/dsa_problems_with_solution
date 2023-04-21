function applyBasicMaths(N,A){
    var arr = [];
    var min = Infinity;
    var result = '';
    for (var i=0; i<N; i++) {
        var sum = 0;
        for (var j=0; j<N; j++) {
            if (i!=j) {
                sum += A[j];
            }
        }
        if (sum%7==0) {
            arr.push(A[i])
        }
        else {
            result = -1;
        }
    }
    for (var i=0; i<arr.length; i++) {
        if (min>arr[i]) min = arr[i]
    }
    
    for (var i=0; i<N; i++) {
        if (A[i]==min) result = i
    }
    console.log(result)
}
