function detectPalII(N, string){
    //write code here
    var obj = {};
    for (var i=0; i<N; i++) {
        if(obj[string[i]] == undefined) {
            obj[string[i]] = 1;
        }
        else {
            obj[string[i]]++;
        }
    }
    var count = 0;
    for (var i in obj) {
        if (obj[i]%2==1) {
            count++;
        }
    }
    if (count <= 1) {
        console.log("Possible!");
    }
    else {
        console.log("Not Possible!");
    }
}