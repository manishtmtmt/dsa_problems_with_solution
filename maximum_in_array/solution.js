function maximumInArray(N,arr){
    var max = -Infinity;
    
    for (var i = 0; i < N; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    
    console.log(max)
}
