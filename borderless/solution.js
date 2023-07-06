function sumWithoutBorders(N, M, matrix){
    //write code here
  var top = 1;
  var bottom = N-2;
  var left = 1;
  var right= M-2;
  var sum = 0;
  for(var i=top;i<=bottom; i++){
      for(var j=left; j<=right; j++){
          sum = sum+ matrix[i][j];
      }
  }console.log(sum)
}
