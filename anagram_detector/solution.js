function anagramDetector(str1,str2){
    
    var obj1 = {};
    for(var i=0; i<str1.length; i++){
        if(obj1[str1[i]]==undefined && str1[i]!=" "){
            obj1[str1[i]]=1
        }
        else if(obj1[str1[i]]!=undefined){
            obj1[str1[i]] += 1;
        }
    }
    // console.log(obj1)
    
    var obj2 = {};
    for(var i=0; i<str2.length; i++){
        if(obj2[str2[i]]==undefined && str2[i]!=" "){
            obj2[str2[i]]=1
        }
        else if(obj2[str2[i]]!=undefined){
            obj2[str2[i]] += 1;
        }
    }
    // console.log(obj2)
    var flag = "False";
    for(var key in obj1){
        if(obj2.hasOwnProperty(key)&&obj2[key]==obj1[key]){
            flag = "True";
        }
        else{
            flag ="False"
            break;
        }
    }console.log(flag)
}
function runProgram(input) {
  // Write code here
  input  = input.trim().split("\n");
  var str1 = input[0].trim().split(" ");
  str1 = str1.join(" ")
  var str2  = input[1].trim().split(" ");
  str2 = str2.join(" ")
  anagramDetector(str1,str2);
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
