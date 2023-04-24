function maximumOccuringElement(A,N){
    //write code here
    var obj = {};
    var arr1 = [];
    var arr2 = [];
    for(var i=0; i<N; i++){
        if(obj[A[i]]== undefined){
            obj[A[i]]=1;
        }
        else {
            obj[A[i]] = obj[A[i]] + 1;
        }
    }
    for(var key in obj){
        arr1.push(key)
        arr2.push(obj[key])
    }
    // console.log(arr1)
    // console.log(arr2)
    var max = - Infinity;
    for(var i=0; i<arr1.length; i++){
        if(arr2[i]>max){
            max = arr2[i];
        }
    }
    // console.log(max)
    for(var key in obj){
        if(obj[key]==max){
            console.log(key);
            break;
        }
    }
    
    
}