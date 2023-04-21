function sumOfIndexes(N,M,arr){
    for (var i=0; i<N; i++) {
        var sum = 0; 
        var bag = ""
        for (var j=0; j<M; j++) {
            sum = i + j;
            bag = bag + sum + " "
        }
        console.log(bag)
    }
}