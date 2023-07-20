function countNames(N,strings){
	//write your code here
   var str = 	strings.sort()
   var obj = {};
   for(var i=0; i<N; i++){
      if(obj[str[i]]==undefined){
          obj[str[i]] = 1;
      } 
      else{
          obj[str[i]] += 1;
      }
   }
   for (var key in obj){
       console.log(key ,obj[key])
   }
}
