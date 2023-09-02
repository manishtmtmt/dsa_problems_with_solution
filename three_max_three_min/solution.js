function threeMaxThreeMin(N,arr){
    //write code here
    var obj = {};
    for(var i=0; i<N; i++){
        obj[arr[i]]=1;
    }
    var array = []
    for(var key in obj){
        array.push(key)
    }
    array.sort((a,b)=>a-b)
    array = array.map(Number)
    
    if(array.length>=3){
        var minDis = "";
        for(var i=0; i<3; i++){
            minDis += array[i]+ " ";
            
        }
       
        console.log(minDis);
        
        var maxDis = "";
        for(var i=array.length-3; i<array.length; i++){
           maxDis += array[i]+ " ";
           
        }
        
            console.log(maxDis);
    }
    else {
        console.log("Not Possible");
        console.log("Not Possible")
    }
   
    
    
}
