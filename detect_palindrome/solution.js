function detectPalindrome(num){
    //write code here
        var rem = 0;
        var temp = 0;
        var final = 0;
        
        temp = num;
        while (num > 0) {
            rem = num % 10;
            num = Math.floor(num/10);
            final = final * 10 + rem;
        }
        
        if (final == temp) {
            console.log("Yes");
        }
        else {
            console.log("No");
        }
    }