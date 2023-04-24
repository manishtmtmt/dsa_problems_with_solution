function stringEquation(N,str) {
    var x = 0;
    var y = 0;
    
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (var i=0; i<N; i++) {
        for (var j=0; j<lower.length; j++) {
            if (str[i]==lower[j]) x++
            if (str[i]==upper[j]) y++
        }
    }
    
    console.log(5*x+3*y)
}