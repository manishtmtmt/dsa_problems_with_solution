function printCharcter(N,str){
    for(var i=0; i<N; i++){
        console.log(str[i]);
    }
}

function runProgram(input) {
  // Write code here
  input=input.trim().split("\n");
  var[N,str] = input;
  printCharcter(N,str);
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
