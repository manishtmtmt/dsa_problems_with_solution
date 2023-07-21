function mergeTwoArray(n,arr1,arr2){
    var left = 0;
    var right = 0;
    var array = [];
    var rightCount = 0;
    var leftCount =0;
    while(left<n&&right<n){
        if(arr1[left]<=arr2[right]){
            array.push(arr1[left]);
            left++
            leftCount++;
        }else{
            array.push(arr2[right]);
            right++;
            rightCount++
        }
    }
    
    if(rightCount!=n){
        for(var i = rightCount; i<n; i++){
            array.push(arr2[i]);
        }
    }
    if(leftCount!=n){
        for(var i= leftCount; i<n; i++){
            array.push(arr1[i])
        }
    }
   
    console.log(array.join(" "))
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr1 = input[1].trim().split(" ").map(Number);
  var arr2 = input[2].trim().split(" ").map(Number);
  mergeTwoArray(n,arr1,arr2);
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
