var arr= [2, 3, 4];

var output = arr.reduce(function(sum,el){
    return sum*el;
},1)

console.log(output)