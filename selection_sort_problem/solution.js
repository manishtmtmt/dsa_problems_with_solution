function solve(N,arr){
    //write code here
    for(var i=0; i<N; i++){
        for(var j=i+1; j<N; j++){
            if(arr[i]>arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr.join(" "))
}


