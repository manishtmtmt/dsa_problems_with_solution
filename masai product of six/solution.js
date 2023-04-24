function findProduct(a,b,c,d,e,f){
    var product = a*b*c*d*e*f;
    console.log(product);
}




function runProgram(input) {
  // Write code here
  input = input.trim().split(" ").map(Number);
  var [a,b,c,d,e,f]= input;
  findProduct(a,b,c,d,e,f);
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
