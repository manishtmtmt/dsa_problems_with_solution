function missingInt(arr,N){
    var obj = {};
    for(var i=0; i<arr.length; i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1
        }
    }
    for(var i=1; i<=N; i++){
        if(obj[i]==undefined){
            console.log(i)
        }
    }
 }
 function runProgram(input) {
   // Write code here
   var arr = input.trim().split(" ").map(Number);
   var N = arr.length + 1
   missingInt(arr,N)
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
 