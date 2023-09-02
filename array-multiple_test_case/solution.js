function addingtoArray(n,arr){
    var bag = "";
    for(var i=0; i<n; i++){
       var sum = arr[i]+1;
       var bag = bag + sum + " ";
    }
    console.log(bag);
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n")
  var tc = +input[0]
  var line = 1;
  for(var i=0; i<tc; i++){
      var n = +input[line]
      line++;
      var arr = input[line].trim().split(" ").map(Number);
      line++;
      addingtoArray(n,arr)
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
