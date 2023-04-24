function specificDiagonals(R, C, matrix, K){
    //write code here
    var row;
    var col;
    for (var i=0; i<R; i++) {
        for (var j=0; j<C; j++) {
            if (matrix[i][j]==K) {
                row = i; 
                col = j;
            }
        }
    }
    
    var sum = row + col;
    var diff = row - col;
    
    var first = "";
    var second = "";
    
    for (var i=0; i<R; i++) {
        for (var j=0; j<C; j++) {
            if (i-j == diff) {
               first = first + matrix[i][j] + " " 
            }
            if (i+j == sum) {
               second =second + matrix[i][j] + " " 
            }
        }
    }
    
    console.log(first)
    console.log(second)
}