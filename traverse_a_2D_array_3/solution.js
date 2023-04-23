function traverse2dArray(N, M, matrix){
    //write code here
    var bag = "";
    for (var i=M-1; i>=0; i--) {
        for (var j=0; j<N; j++) {
            bag = bag + matrix[j][i] + " ";
        }
    }
    console.log(bag);
  
}