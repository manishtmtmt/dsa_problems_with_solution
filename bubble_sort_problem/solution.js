function solve(N,arr){
    //write code here
    for(var i=0; i<N; i++){
        var swapped = false;
        for(var j=0; j<N-i-1; j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(swapped == false){
            break;
        }
    }
    console.log(arr.join(" "));
}


