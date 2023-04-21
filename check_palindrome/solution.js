function checkPalindrome(N, str) {
    var string = str.toString();
    var n = string.length;
    var bag = "";
    for (var i=n-1; i>=0; i--) {
        bag = bag + string[i];
    }
    if (string == bag) {
        console.log("Yes")
    }
    else {
        console.log("No")
    }
}