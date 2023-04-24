function rotateBy90(R, matrix){
    //write code here
    for (var i=R-1; i>=0; i--) {
        var bag = ""
        for (var j=0; j<R; j++) {
            bag = bag + matrix[j][i] + " "
        }
        console.log(bag)
    }
}