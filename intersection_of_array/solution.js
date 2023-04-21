function intersectionOfArray(N, arr1, arr2){
    for (var i=0; i<N; i++) {
        for (var j=0; j<N; j++) {
            if (arr1[i]==arr2[j]) {
                console.log(arr1[i])
            }
        }
    }
}