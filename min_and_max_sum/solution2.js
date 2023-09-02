function  diffOfMaxAndMinSum(n,m,arr){
    for(var i=0; i<n-1; i++){
        var min = i;
        for(var j=i+1; j<n; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        swap(arr,i,min)
    }
    var minSum = 0;
    for(var i=0; i<n-m; i++){
        minSum += arr[i];
    }
    var maxSum = 0;
    for(var i=m; i<n; i++){
        maxSum += arr[i];
    }
    var diff = maxSum - minSum;
    console.log(diff)
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t = +input[0];
  var line = 1
  for(var i=0; i<t; i++){
      var [n,m] = input[line].trim().split(' ').map(Number);
      line++;
      var arr = input[line].trim().split(' ').map(Number);
      line++;
      diffOfMaxAndMinSum(n,m,arr)
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
