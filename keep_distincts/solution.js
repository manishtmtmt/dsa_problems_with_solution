
function runProgram(input) {
    // Write code here
      var str = "";
      str = str+input[0];
      for(var i=1; i<input.length; i++){
          var flag = false;
          for(var j=0; j<str.length; j++){
              if(str[j]!=input[i]){
                 flag = true
              }
              else {
                 flag = false;
                 break;
              }
          }
          if(flag == true){
              str += input[i];
              flag = false;
          }
      }console.log(str)
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
  