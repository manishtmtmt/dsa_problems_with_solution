function sumOfDistinctElement(n,arr){
    var obj = {};
    for(var i=0; i<n; i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1;
        }else{
            obj[arr[i]] += 1;
        }
    };
    var ans = 0;
    for(var key in obj){
        key = +key;
        ans += key;
    }
    console.log(ans)
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  sumOfDistinctElement(n, arr)
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
