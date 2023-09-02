function matrixComp(n,m,arr_A,i,j,arr_B){
    var sumOfArr_A = 0;
    for(var x=0; x<n; x++){
        for(var y=0; y<m; y++){
            sumOfArr_A += arr_A[x][y];
        }
    }
    var sumOfArr_B = 0;
    for(var x=0; x<i; x++){
        for(var y=0; y<j; y++){
            sumOfArr_B += arr_B[x][y];
        }
    }
    if(sumOfArr_A>sumOfArr_B){
        console.log(sumOfArr_A)
    }else{
        console.log(sumOfArr_B)
    }
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var [n,m]=input[0].trim().split(" ").map(Number);
  var arr_A = [];
  for(var x=1; x<=n; x++){
      var arr1 = input[x].trim().split(' ').map(Number);
      arr_A.push(arr1)
  }
  var line = n+1;
  var [i,j]= input[line].trim().split(' ').map(Number);
  var arr_B = [];
  for(var y=line+1; y<line+1+i; y++){
      var arr2 = input[y].trim().split(' ').map(Number);
      arr_B.push(arr2)
  }
 matrixComp(n,m,arr_A,i,j,arr_B)
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
