function evenSumAgain(num) {
    for (var i = 1;  i <= num; i++) {
        var sum = 0;
        for (var j = 1; j <= i; j++) {
            if (j % 2 === 0) {
                sum += j
            }
        }
        console.log(sum)
    }
}
