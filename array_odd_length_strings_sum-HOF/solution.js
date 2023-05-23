var arr = ["A", "Good", "Problem"]

var output = arr.filter(function(el,i,arr){
    return el.length%2==1;
}).reduce(function(sum,el,i){
    return sum+el.length
},0)

console.log(output)