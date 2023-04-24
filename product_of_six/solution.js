function runProgram(input) {
    input = input.trim().split().map(Number);
    var [one, two, three, four, five, six] = input;
    productOfSix(one, two, three, four, five, six)
}

function productOfSix(one, two, three, four, five, six) {
    console.log(one * two * three * four * five * six)
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