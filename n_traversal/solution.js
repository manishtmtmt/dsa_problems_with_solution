function nTraversal(matrix) {
    var bag = "";
    for (var i=matrix.length-1; i>=0; i--) {
        bag = bag + matrix[i][0] + " ";
    }
    for (var i=1; i<matrix.length; i++) {
        bag = bag + matrix[i][i] + " ";
    }
    for (var i=matrix.length-2; i>=0; i--) {
        bag = bag + matrix[i][matrix.length-1] + " ";
    }
    console.log(bag);
  }