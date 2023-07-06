function pairReturn(n,k,arr){
    arr.sort((a,b)=>a-b);
    var left = 0 ;
    var right = n-1;
    while(left<right){
        var sum = arr[left]+arr[right]
        if(sum==k){
            return 1;
        }
        else if(sum>k){
            right--
        }
        else{
            left++;
        }
    }
    return -1
    
 }
 
 function runProgram(input) {
   // Write code here
   input= input.trim().split("\n");
   var t = +input[0];
   var line = 1;
   for(var i=0; i<t; i++){
       var [n,k] = input[line].trim().split(" ").map(Number);
       line++
       var arr = input[line].trim().split(" ").map(Number);
       line++;
       console.log(pairReturn(n,k,arr))
   }
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
 