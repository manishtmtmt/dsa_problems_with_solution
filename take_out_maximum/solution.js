function  takeOutMax(N,K,arr){
    var max = -Infinity;
    var sum =0;
    for(var i=0; i<K; i++){
        sum = sum+ arr[i];
    }
    if(sum>max){
        max = sum ;
    }
    for(var i = K; i<N; i++){
        sum = sum - arr[i-K] + arr[i]
        if(sum>max){
            max = sum;
        }
    }console.log(max);
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var [N,K] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  takeOutMax(N,K,arr)
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
