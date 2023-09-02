function diffOfMinAndMaxSum(n,m,arr){
    var sortedArr = arr.sort((a, b) => a - b);
    var minSum = 0;
    for(var i=0; i<n-m; i++){
        minSum += sortedArr[i];
    }
    var maxSum = 0;
    for(var i=m ; i<n; i++){
        maxSum += sortedArr[i];
    }
    var diff = maxSum - minSum;
    console.log(diff)
 }
 function runProgram(input) {
   // Write code here
   input = input.trim().split("\n");
   var t = +input[0];
   var line = 1;
   for(var i=0 ; i<t ; i++){
       var [n,m] = input[line].trim().split(' ').map(Number);
       line++
       var arr = input[line].trim().split(" ").map(Number);
       line++;
       diffOfMinAndMaxSum(n,m,arr)
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
 