function alanFrequency(N, string) {
    //write code here
    var obj = {};
    var alph = "abcdefghijklmnopqrstuvwxyz"
   for(var i=0; i<alph.length; i++){
       for(var j=0; j<N; j++){
           if(alph[i]==string[j]){
               if(obj[alph[i]]==undefined){
                   obj[alph[i]]=1
               }else {
                   obj[alph[i]]= obj[alph[i]]+1;
               }
           }
       }
   }
    for(key in obj){
        console.log(key+"-"+obj[key])
    }
  }
  