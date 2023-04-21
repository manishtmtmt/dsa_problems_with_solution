function masaiPalSubString(S){
    var max = -Infinity;
    for (var i=0; i<S.length; i++) {
        for (var j=i; j<S.length; j++) {
            var bag = "";
            for (var k=i; k<=j; k++) {
                bag = bag + S[k]
            }
            if(checkPalindrome(bag)) {
                if(bag.length>max) {
                    max = bag.length;
                }
            }
        }
    }
    console.log(max)
}

function checkPalindrome(str){
    var bag = "";
    for (var i=str.length-1; i>=0; i--) {
        bag = bag + str[i]
    }
    if (bag == str) return true;
    else return false;
}