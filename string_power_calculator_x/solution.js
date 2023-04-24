function powerOfString(N, str){
	var x = 0;
	var y = 0;
	for (var i=0; i<N; i++) {
	    if (checkVowel(str[i])) x++;
	    else y++;
	}
	console.log(7*x+2*y)
}

function checkVowel(str) {
    if(str=="a"||str=="e"||str=="i"||str=="o"||str=="u") return true;
    else return false;
}