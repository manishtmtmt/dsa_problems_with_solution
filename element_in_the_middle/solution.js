function findMiddleElement(n, arr) {
    let k = 0;
    while (k < n) {
        let flag = true;
        for (let i = 0; i < k; i++) {
            if(arr[k] < arr[i]) flag = false;
        }
        
        for (let i = k + 1; i < n; i++) {
            if (arr[k] > arr[i]) flag = false;
        }
        
        if (!flag) k++;
        else return arr[k]
    }
    
    return -1;
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    const res = findMiddleElement(n, arr);
    console.log(res)
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
