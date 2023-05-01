function goingAdvanceRound(N,k,arr){
    var count =0;
    var output =0;
    for (var i=0; i<N; i++){
        if(arr[i]==0){
            count++
        }
    }
    if(count==N){
        console.log(0);
    }
    else {
         for(var i=0; i<N; i++){
        if(arr[i]>=arr[k-1]){
            output++
        }
    }
    console.log(output)
    }
}
function runProgram(input) {
// Write code here
input = input.trim().split("\n");
var [N,k] = input[0].trim().split(" ").map(Number);
var arr = input[1].trim().split(" ").map(Number);
goingAdvanceRound(N,k,arr)
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
