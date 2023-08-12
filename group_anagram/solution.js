function groupAnagram(n,arr){
    let sortedArr = arr.map(item => item.split("").sort().join(""));
    // console.log(sortedArr)
    let obj = {};
    
    for (let key of sortedArr) {
        if(obj[key] == undefined) obj[key] = [];
    }
    // console.log(obj)
    
    
    for (let key of arr) {
        obj[key.split("").sort().join("")].push(key)
        
    }
    // console.log(obj)
    for (let key in obj) {
        console.log(obj[key].length);
        for (let k of obj[key]) {
            console.log(k)
        }
    }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t  = +input[0];
  var line = 1;
  for(var i=0; i<t; i++){
      var n = +input[line];
      line++;
      var arr = [];
      for(var j=0; j<n; j++){
          var str = input[line].trim().split(" ");
          str = str.join(" ");
          arr.push(str)
          line++;
      }
      groupAnagram(n,arr)
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
