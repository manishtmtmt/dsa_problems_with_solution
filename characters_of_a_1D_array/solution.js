function characters1DArray(N,str){
    var obj = {
        "*":0,
        "-":1,
        "/":2
    }
    var bag = ""
    for (var i=0; i<N; i++) {
        for (var key in obj) {
            if (str[i]==key) {
                bag = bag + obj[key]
            }
        }
    }
    console.log(bag)
}