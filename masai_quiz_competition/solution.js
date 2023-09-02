function masaiQuizCompetition(n,arr){
	//write your code here
	var group=1;
	for(var i=0; i<n-1; i++){
	    if(arr[i]==1&&arr[i+1]==0){
	        group++;
	    }
	}
	if(arr[n-1]==0){
	    group--;
	}
	console.log(group);
   
    
    
}
