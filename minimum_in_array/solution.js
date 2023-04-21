function minimumInArray(N,arr){
    var min = Infinity;
    for (var i=0; i<N; i++) {
        if (arr[i]<min) {
            min = arr[i]
        }
    }
    console.log(min)
}