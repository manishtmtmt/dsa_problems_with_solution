function maxScoreOfNoddy (N,x,arr){
    var count =0;
    for(var i=0; i<N; i++){
        if(arr[i]>x){
            count++
        }
        if(count==2){
            break;
         }
    }
    if(count==0) console.log(N);
    if(count==1) console.log(N-1);
    if(count==2) console.log(i-1)
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var [N,x] = input[0].trim().split(" ").map(Number);
  var arr =  input[1].trim().split(" ").map(Number);
  maxScoreOfNoddy(N,x,arr);
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
