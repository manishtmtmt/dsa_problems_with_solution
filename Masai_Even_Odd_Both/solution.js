//Enter code here
function evenOddandBoth(x,y){
    if(x%2==0&&y%2==0){
        console.log("Even")
    }
    else if(x%2==1&&y%2==1){
        console.log("Odd")
    }
    else{
        console.log("Even-Odd")
    }
}

function runProgram(input){
    input = input.trim().split(" ").map(Number)
    var [x,y]=input
    evenOddandBoth(x,y)
}

if(process.env.USER === ""){
    runProgram(``);
}else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data",function (input) {
        read += input;
    });
    process.stdin.on("end",function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT",function () {
        read = read.replace(/\n$/, "");
        runProgram(read)
        process.exit(0)
    });
}
