var arr = ["assignment", "problem", "media", "upload"]

var output = arr.filter(function(el){
    return el[0]=="a"||el[el.length-1]=="a"
})
console.log(output)