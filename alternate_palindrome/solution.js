function alternatePalindrome(n,str){
    var obj = {};
    for(var i=0 ; i<n; i++){
        if(obj[str[i]]==undefined){
            obj[str[i]]= 1;
        }else{
            obj[str[i]] += 1;
        }
    }
    var oddCount = 0;
    for(var key in obj){
        if(obj[key]%2!=0){
            oddCount++;
        }
    }
    if(oddCount==1|| oddCount==0){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t = +input[0];
  var line = 1;
  for(var i=0; i<t; i++){
      var n = +input[line];
      line++;
      var str = input[line].trim(" ").split(' ');
      str = str.join(" ")
      line++;
      alternatePalindrome(n,str)
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
