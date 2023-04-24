function  findWorldTestChampion(indPoints,ausPoints,indMatches,ausMatches){
    if(indPoints>ausPoints){
        console.log("India")
    }
    else if(ausPoints>indPoints){
        console.log("Australia")
    }
    else if(ausPoints==indPoints){
        if(indMatches<ausMatches){
            console.log("India")
        }else if(ausMatches<indMatches){
            console.log("Australia")
        } else if(indMatches==ausMatches){
        console.log("Play another game!")
        }
    }
   
}



function runProgram(input) {
  // Write code here
  input = input.trim().split("\n")
  var[indPoints,ausPoints,indMatches,ausMatches]=input
  findWorldTestChampion(indPoints,ausPoints,indMatches,ausMatches)
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
