function competeWithNeighbour(n,arr){
    var count = 0;
    for(var i=1;i<n-1;i++){
        if(arr[i]>arr[i-1]&&arr[i]>arr[i+1]){
            count++;
        }
    }
    if(arr[0]>arr[1]){
        count++
    }
    if(arr[n-1]>arr[n-2]){
        count++
    }
    console.log(count)
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  competeWithNeighbour(n,arr)
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
