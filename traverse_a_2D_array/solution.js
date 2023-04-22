function traverse2dArray(N, M, matrix){
    //write code here
    var bag = "";
    for (var i=0;i<M; i++) {
        for (var j=N-1; j>=0; j--){
            bag =  bag + matrix[j][i] + " "
        }
    }
    console.log(bag)
}