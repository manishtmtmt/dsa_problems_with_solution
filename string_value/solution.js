function stringValue(S) {
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var sum = 0;
    for (var i=0; i<S.length; i++) {
        for (var j=0; j<lower.length; j++) {
            if (S[i]==lower[j]) sum += j+1;
        }
    }
    console.log(sum)
}