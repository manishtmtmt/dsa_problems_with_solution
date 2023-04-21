function sumOfSpecialPairs(N,A){
    var sum = 0;
    for (var i=0; i<N; i++) {
       for (var j=i+1; j<N; j++) {
           var diff = Math.abs(A[i]-A[j])
           if (i<j && isPrime(j-i)) {
               sum = sum + diff;
           }
       }
   } 
    console.log(sum)
}
function isPrime(num) {
    var count = 0;
    for (var i=1; i<=num; i++) {
        if (num%i==0) count++;
    }
    if (count==2) {
        return true;
    }else {
        return false;
    }
}