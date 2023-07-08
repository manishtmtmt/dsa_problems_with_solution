function sortByModulo(N,K,arr){
    for(var i=0; i<N; i++){
        var swapped = false;
        for(var j=0; j<N-1; j++){
            if(arr[j]%K>arr[j+1]%K){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(swapped == false ){
            break;
        }
    }
    console.log(arr.join(' '))
       
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var [N,K] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  sortByModulo(N,K,arr)
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
