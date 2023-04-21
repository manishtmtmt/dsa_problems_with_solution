function averageOfAll(n, arr){
    //write code here
    var sum = 0;
    for (var i=0; i<n; i++) {
        sum = sum + arr[i];
    }
    var average = Math.ceil(sum/n);
    console.log(average);
}
