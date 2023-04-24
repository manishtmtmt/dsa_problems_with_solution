function transposeTheMatrix(N, M, matrix){
    for (var i=0; i<M; i++) {
        var bag = ""
        for (var j=0; j<N; j++) {
            bag = bag + matrix[j][i] + " "
        }
        console.log(bag)
    }
  
}