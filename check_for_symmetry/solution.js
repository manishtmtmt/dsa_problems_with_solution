function checkForSymmetry(n, matrix) {
    //write code here
    //console n,matrix and check the input response
    if(checkHorizontal(n,matrix)==true&&checkVertical(n,matrix)==true){
        console.log("BOTH")
    }
    if(checkHorizontal(n,matrix)==true&&checkVertical(n,matrix)==false){
        console.log("HORIZONTAL")
    }
     if(checkHorizontal(n,matrix)==false&&checkVertical(n,matrix)==true){
        console.log("VERTICAL")
    }
    if(checkHorizontal(n,matrix)==false&&checkVertical(n,matrix)==false){
        console.log("NO")
    }
    
   
}

function checkHorizontal(n,matrix){
    var top = 0; 
    var bottom = n-1;
    while(top < bottom){
        for(var i=0; i<n; i++){
            if(matrix[top][i]!=matrix[bottom][i]){
                return false;
            }
        }
        top++;
        bottom--;
    }
    return true;
}

function checkVertical(n,matrix){
    var left = 0 ;
    var right = n-1;
    while(left<right){
        for(var i=0; i<n; i++){
            if(matrix[i][left]!=matrix[i][right]){
                return false;
            }
        }
        left++;
        right--;
    }
    return true;
}

