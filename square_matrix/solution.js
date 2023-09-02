function addOneToArray(arr){
    var bag = "";
    for(var i=0; i<arr.length; i++){
        var sum = arr[i]+1;
        var bag = bag + sum + " ";
    }
    console.log(bag)
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n")
  var tc = +input[0];
  for (var i=1; i<=tc; i++){
      var arr = input[i].trim().split(" ").map(Number);
      addOneToArray(arr);
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
