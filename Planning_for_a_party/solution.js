function partyPlanning(N,PamID,M,JimID){
    //write code here
   var pam = {};
   var pamList = [];
   for(var i=0; i<N; i++){
       if(pam[PamID[i]]==undefined){
           pamList.push(PamID[i]);
           pam[PamID[i]]=1;
       }
   }
    var jim = {};
   var jimList = [];
   for(var i=0; i<M; i++){
       if(jim[JimID[i]]==undefined){
           jimList.push(JimID[i]);
           jim[JimID[i]]=1;
       }
   }
    var flag = false;
    for (var key in jim) {
        if(jim[key] !== pam[key]) flag = true;
    }
    
    for (var key in pam) {
        if(pam[key] !== jim[key]) flag = true;
    }
    
    // if(jimList.length==pamList.length){
    //     for(var i=0; i<pamList.length; i++){
    //         if(jimList.includes(pamList[i])==false) flag= true;
            
    //     }
    // }
    // else{
    //     flag = true;
    // }
    
    console.log(flag ? "No" : "Yes")
  
   
}
