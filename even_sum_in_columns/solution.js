function evenSumColumns(N,M,arr){
    //write code here
    for (var i=0; i<M; i++) {
        var sum = 0;
        var bag = [];
        for (var j=0; j<N; j++) {
            bag.push(arr[j][i]);
        }
        for (var k=0; k<bag.length; k++) {
            if (bag[k]%2==0) {
                sum = sum + bag[k];
            }
        }
        console.log(sum);
    }
}
