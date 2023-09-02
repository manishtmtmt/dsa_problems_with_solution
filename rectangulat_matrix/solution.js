function rectangulatMatrix(N,M,arr){
    for(var i=0; i<N; i++){
        var bag = "";
        for(var j=0; j<M; j++){
            var sum = arr[i][j]+1;
            bag = bag + sum + " ";
        }
        console.log(bag)
    }
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var [N,M] = input[0].trim().split(' ').map(Number)
  var arr =[];
  for(var i=1; i<=N; i++){
      arr.push(input[i].trim().split(" ").map(Number));
  }
  rectangulatMatrix(N,M,arr);
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
