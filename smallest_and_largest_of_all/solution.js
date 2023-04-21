function smallestAndLargestOfAll(n, arr){
    var min = Infinity;
    var max = -Infinity;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
        if (arr[i]>max){
            max = arr[i];
        }
    }
    console.log(min);
    console.log(max);
}