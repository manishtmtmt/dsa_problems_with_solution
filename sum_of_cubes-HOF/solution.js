var arr = [1, 2, 3, 4, 5, 6];
var res = arr.filter(function(el){
    return el%3==0
}).reduce(function(sum,el){
    return sum+el**3;
},0)

console.log(res)

