function sumAndProductEquation(N, arr) {
    var x = 1;
    var y = 0;
    for (var i=0; i<N; i++) {
        x = x*arr[i]
        y = y + arr[i];
    }
    console.log(2*x+10*y)
  }