 // there are two function both will work.
 
 
function winnerTeam (input){
    var obj = {};
    for(var i=1; i<input.length; i++){
        if(obj[input[i]]==undefined){
            obj[input[i]]=1
        }else {
            obj[input[i]] = obj[input[i]]+1;
        }
    }
    var team =[];
    var goal = [];
    for(key in obj){
        team.push(key);
        goal.push(obj[key]);
    }
    var max = -Infinity;
    for(var i=0; i<goal.length; i++){
        if(goal[i]>max){
            max=team[i]
        }
    }console.log(max)
 }
 
 function func(n, arr) {
     var obj = {}
     for(var i = 0; i < n; i++) {
         obj[arr[i]] = (obj[arr[i]] || 0) + 1;   
     }
    var max = -Infinity;
    for (key in obj) {
        if(obj[key] >  max) max = obj[key]
    }
    var ans = "";
    for (key in obj ) {
       if(obj[key] == max) ans = key;
    }
    
    console.log(ans)
 }
 
 
 function runProgram(input) {
   // Write code here
   var [n, ...arr] = input.trim().split("\n");
  
     func(n, arr)
 //   winnerTeam(input)
 }
 
 if (process.env.USER === "") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }
 