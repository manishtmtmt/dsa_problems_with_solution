function checkAnagram(s1,s2){
    var s1Obj = {};
    for(var i=0; i<s1.length; i++){
       if(s1Obj[s1[i]]==undefined ){
           s1Obj[s1[i]] = 1;
       }else{
           s1Obj[s1[i]] += 1;
       }
    }
    var s2Obj = {};
    for(var i=0; i<s2.length; i++){
       if(s2Obj[s2[i]]==undefined ){
           s2Obj[s2[i]] = 1;
       }else{
           s2Obj[s2[i]] += 1;
       }
    }
    var flag = false;
   for(var key in s1Obj){
       if(s2Obj.hasOwnProperty(key)&&s2Obj[key]==s1Obj[key]){
           flag = true;
       }
       else{
           flag = false;
           break;
       }
   }
   if(flag == true){
       console.log("True")
   }else{
       console.log("False")
   }
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t = +input[0];
  var line = 1;
  for(var i=0; i<t; i++){
      var s1 = input[line].trim().split(" ");
      s1 = s1.join(" ")
      line++;
      var s2 = input[line].trim().split(" ");
      s2 = s2.join(" ")
      line++;
      checkAnagram(s1,s2);
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
