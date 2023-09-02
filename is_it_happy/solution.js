// Hint :- I have to find out the length of number if it's 1 then
// i have to chech that if num = also 1 then return true else return false.


function isItHappy(num){
    if (num.toString().length == 1) {
        return num == 1;
    }
    
    while(num!=1){
        var sum = 0
        
        num = num.toString()
        for(var i=0; i<num.length; i++){
            var x = Number(num[i]);
            sum += x**2
        }
        num = sum;
        if (sum.toString().length == 1) break;
        
    }
    
    return num == 1;

  
}



function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t= +input[0];
  var line = 1;
  for(var i=0; i<t; i++){
      var num = +input[line]
      line++;
     console.log(isItHappy(num))
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
