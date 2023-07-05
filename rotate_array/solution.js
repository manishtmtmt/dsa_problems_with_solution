
function rotateArr(N,K,arr){
    K=K%N
    reverseArr(arr,0,N-1);
    reverseArr(arr,0,K-1);
    reverseArr(arr,K,N-1);
    var bag = "";
    for(var i=0; i<N; i++){
        bag = bag + arr[i]+" ";
    }console.log(bag)
}

function reverseArr(arr,left,right){
    while(left<right){
        var temp = arr[left];
        arr[left]=arr[right];
        arr[right]=temp
        left++;
        right--;
    }
}
function runProgram(input) {
  // Write code here
  input = input.trim().split('\n');
  var t = +input[0];
  var line = 1;
  for(var i=0; i<t; i++){
      var [n,k]= input[line].trim().split(' ').map(Number);
      line++;
      var arr = input[line].trim().split(" ").map(Number);
      line++
      rotateArr(n,k,arr);
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
