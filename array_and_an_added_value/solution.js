function  addValuetoArray(N,K,arr){
    var bag = "";
    for(var i=0; i<N; i++){
        var sum = arr[i]+K;
        bag = bag + sum + " ";
    }
    console.log(bag)
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  var line =1;
  for(var i=0; i<tc; i++){
      var [N,K] = input[line].trim().split(" ").map(Number);
      line++;
      var arr = input[line].trim().split(" ").map(Number);
      line++;
      addValuetoArray(N,K,arr);
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
