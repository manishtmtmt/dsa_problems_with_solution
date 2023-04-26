function bagOfLetters(N1,str1,N2,str2){
    //write your code here
    // console.log(N1,str1,N2,str2)
    var myWord = {};
    var yourWord = {};
    for(var i=0; i<N1; i++){
        if(myWord[str1[i]]==undefined){
            myWord[str1[i]]=1
        }
        else {
           myWord[str1[i]] = myWord[str1[i]] + 1;
        }
    }
    
     for(var i=0; i<N2; i++){
        if(yourWord[str2[i]]==undefined){
            yourWord[str2[i]]=1
        }
        else {
           yourWord[str2[i]] = yourWord[str2[i]] + 1;
        }
    }
    var flag = true
    for(key in yourWord){
        if(myWord[key]==undefined||myWord[key]<yourWord[key]){
            flag= false;
        }
    }
    console.log(flag? "Yes" : "No")
   
