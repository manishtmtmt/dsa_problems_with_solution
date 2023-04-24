function vowelsInRows(N,M,arr){
    for (var i=0; i<N; i++) {
        var count = 0;
        for (var j=0; j<M; j++) {
            if (checkVowel(arr[i][j])) count++;
        }
        if (count>0) console.log("Yes");
        else console.log("No")
    }
}

function checkVowel(char) {
    if (char=="a"||char=="e"||char=="i"||char=="o"||char=="u") return true;
    else return false;
}
