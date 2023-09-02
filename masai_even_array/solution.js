function findEvenArray(x,y){
    for(var i=0; i<x; i++){
        if(y[i]%2==0){
            console.log(y[i]);
        }
    }
}

function runProgram(input) {
 // Write code here
 input = input.trim().split("\n");
 var [x,y] = input;
 x = +(x);
 y = y.trim().split(" ").map(Number);
 findEvenArray(x,y)
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
