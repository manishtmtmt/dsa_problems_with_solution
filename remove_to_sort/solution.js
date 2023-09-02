function removeToSort(n,arr){
    var sorted = "";
    var max = -Infinity;
    for(var i=0;i<n;i++){
        if(arr[i]>=max){
            sorted += arr[i]+" "
            max = arr[i];
        }
    }
    console.log(sorted);
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr  = input[1].trim().split(" ").map(Number);
  removeToSort(n,arr)
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
