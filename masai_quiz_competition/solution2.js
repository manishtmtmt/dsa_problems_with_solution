function quizComp(n,arr){
    var group = 0;
    var count = 0;
    for(var i=0; i<n; i++){
        if(arr[i]==1){
            count++;
        }else if(arr[i]!=1&&count!=0){
            group++;
            count =0;
        }
        
    }
    if(count!=0){
        group++;
    }
    console.log(group)
}


function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t  = +input[0];
  var line = 1;
  for(var i=0; i<t; i++){
      var n = +input[line];
      line++;
      var arr = input[line].trim().split(' ').map(Number);
      line++;
      quizComp(n,arr)
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
