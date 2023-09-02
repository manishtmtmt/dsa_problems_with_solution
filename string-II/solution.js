function stringMultiTest (n,str){
    console.log(str);
}
function runProgram(input) {
  // Write code here
  input = input.trim().split('\n');
  var tc = +input[0];
  var line = 1;
  for (var i=0; i<tc; i++){
      var n = +input[line];
      line++;
      var str= input[line].trim() 
      line++
      stringMultiTest(n,str)
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
