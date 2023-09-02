function countName(n,arr){
    var obj = {};
    for(var i=0; i<n; i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]] = 1
        }else{
            obj[arr[i]]= obj[arr[i]]+1;
        }
    }
    var names =[];
    var times = [];
    for(var key in obj){
        names.push(key);
        times.push(obj[key])
    }
    for(var i=0; i<names.length-1; i++){
        var min =i;
        for(var j= i+1; j<names.length; j++){
            if(names[j]<names[min]){
                min= j
            }
        }
        swap(names,i,min);
        swap(times,i,min);
    }
    for(var i=0; i<names.length; i++){
        console.log(names[i] ,times[i])
    }
}
function swap(arr,i,j){
    var temp = arr[i];
    arr[i]=arr[j];
    arr[j] = temp;
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var line = 1;
  var arr = []
  for(var i=0; i<n; i++){
      var word = input[line].trim().split(" ");
      word = word.join(' ')
      line++;
      arr.push(word)
  }
  countName(n,arr)
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
