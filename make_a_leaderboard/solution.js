function  makeLeaderBoard(scoreBoard){
    for(var i=0 ; i<scoreBoard.length-1; i++){
        var min =i;
        for(var j=i+1; j<scoreBoard.length; j++){
            if(scoreBoard[j][1]>scoreBoard[min][1]){
                min = j
            }
        }
        swap(scoreBoard,i,min)
    }
   
    for(var i=0; i<scoreBoard.length-1; i++){
        var min = i;
        for(var j=i+1; j<scoreBoard.length; j++){
            if(scoreBoard[j][1]==scoreBoard[min][1]&&scoreBoard[j][0]<scoreBoard[min][0]){
                min = j;
            }
        }
        swap(scoreBoard,i,min)
    }
    
    
    var rank = 1;
    var currRank = 1;
    
    console.log(`${rank} ${scoreBoard[0][0]}`)
    for(var i=1; i<scoreBoard.length; i++){
        currRank++;
        if(scoreBoard[i][1]==scoreBoard[i-1][1]){
            console.log(`${rank} ${scoreBoard[i][0]}`)
        }else{
            rank = currRank;
            console.log(`${rank} ${scoreBoard[i][0]}`)
        }
    }
}

function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var line = 1;
  var scoreBoard = [];
  for(var i=line; i<=n; i++){
      var arr = [];
      arr.push(input[line].trim().split(" ")[0]);
      arr.push(input[line].trim().split(" ").map(Number)[1]);
      line++;
      scoreBoard.push(arr);
  }
  makeLeaderBoard(scoreBoard)
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
