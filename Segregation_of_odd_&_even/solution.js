function seperationOfOddEven(N, arr,Q) {
    //write code here
    var even = "";
    var odd = "";
    for(var i=0; i<N; i++){
        if(arr[i]%2==0){
            even=even + arr[i] + " ";
        }
        else{
            odd = odd + arr[i] + " ";
        }
    }
    if(Q==1){
        console.log(even+odd);
    }
    if(Q==2){
        console.log(odd+even);
    }
  }
  