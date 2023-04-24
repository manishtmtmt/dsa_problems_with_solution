function moneyManagement(N,exp,salary){
    var totalExp = 0;
    for(var i=0; i<N; i++){
        totalExp = totalExp + exp[i];
    }
    if(totalExp>salary){
        console.log("Debt")
    }
    else if(totalExp<salary){
        console.log("Save")
    }
    else{
        console.log("Neutral")
    }
}


function runProgram(input) {
  // Write code here
  input = input.trim().split("\n")
  var [N,exp,salary] = input;
  exp = exp.trim().split(" ").map(Number)
  moneyManagement(N,exp,salary)
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
