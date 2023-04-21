function arrayHalfTraversal(N, arr){
	var c1 = 0;
	var c2 = 0;
	for (var i=0; i<N/2; i++) {
	    c1 = c1 + arr[i]
	}
	for (var i=N/2; i<N; i++) {
	    c2 = c2 + arr[i]
	}
	var ans = 7*c1 + 2*c2;
	console.log(ans)
}