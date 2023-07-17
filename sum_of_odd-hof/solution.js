var num = [1,2,3,4];

var output = num.filter(function(el){
    return el%2==1;
}).reduce(function(sum,el){
    return sum+el;
},0)

console.log(output)