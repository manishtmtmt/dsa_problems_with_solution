function twoSum(N,B,arr){
    var left=0;
    var right = N-1;
    while(left<right){
        var sum = arr[left]+arr[right]
        if(sum==B){
            return `${left} ${right}`
        }
        else if(sum>B){
            right--;
        }
        else{
            left++;
        }
    }
    return `-1 -1`;
}
 

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n")
//   console.log(input);
  var tc = +input[0]
//   console.log(tc)
  var line= 1;
  for(var i=0; i<tc; i++){
      var [N,B] = input[line].trim().split(" ").map(Number);
    //   console.log(N,B);
      line++
      var arr = input[line].trim().split(" ").map(Number);
    //   console.log(arr);
      line++;
      console.log(twoSum(N,B,arr));
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
