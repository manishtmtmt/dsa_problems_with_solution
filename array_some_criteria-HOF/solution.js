var arr = [2, 4, 5, 3, 6, 8]

var output = arr.filter(function(element,index,array){
    return index%2==0&&element%2==0
})

console.log(output)