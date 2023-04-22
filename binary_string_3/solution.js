function binaryString3(N,str){
    //write code here
    // console.log(typeof(str));
    var length = 0;
    var max = -Infinity;
    var countOf1 = 0;
    for (var i=0; i<N; i++) {
        if (str[i]=="1") {
            countOf1++;
        }
        for (var j=i; j<N; j++) {
            var bag = '';
            for (var k=i; k<=j; k++) {
                bag = bag + str[k];
                if(bag[0]=="1" && bag[bag.length-1]=="1") {
                    length = bag.length;
                }
            }
            if (length > max) {
                max = length;
            }
        }
    }
    if (countOf1 <= 1) {
        console.log("0");
    }
    else {
        console.log(max);
    }
}