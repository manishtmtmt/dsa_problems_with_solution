function newYearAndPyramid(stone){
    var height  = 0;
    var i = 0;
    var j = 1;
   while(i<stone){
       i = i+j
       stone = stone-i;
       j++
       if(stone>=0){
           height++
       }
   }
   console.log(height)
}
function runProgram(input) {
  // Write code here
  var stone = +input
  newYearAndPyramid(stone)
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
