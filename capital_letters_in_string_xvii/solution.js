function capitalLettersInStringXVII(N, str) {
	//write you code here
	var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var x = 0;
	for (var i=0; i<N; i++) {
	    for (var j=0; j<upper.length; j++) {
	        if (str[i]==upper[j]) {
	            x++;
	        }
	    }
	}
	console.log(17*x);
}