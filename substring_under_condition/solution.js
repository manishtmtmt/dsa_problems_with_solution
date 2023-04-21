function subStrUnderCond(s){

    var count = 0;
    for (var i=0; i<s.length; i++) {
        var bag = "";
        for (var j=i; j<s.length; j++){
            bag = bag + s[j];
            if (bag[0] == bag[bag.length-1]) {
                count++;
            }
        }
        
    }
    console.log(count);
}