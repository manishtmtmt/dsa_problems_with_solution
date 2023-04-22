function playingWithArray(N, arr){
    var x = 0;
    var y = 0;
    
    for (var i = 0; i < N; i++) {
        if (arr[i] % 2 === 0) {
            x += arr[i]
        }
        else {
            y += arr[i]
        }
    }
    
    console.log(x * y)
}
