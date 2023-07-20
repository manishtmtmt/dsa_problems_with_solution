function symmetricOrNot(n, mat) {
    // write code here
    if(checkColumn(n,mat)==true&&checkRow(n,mat)==true){
        console.log("YES")
    }else{
        console.log("NO")
    }
    
}

function checkColumn(n,mat){
    var left = 0; 
    var right = n-1;
    while(left<right){
        for(var i=0; i<n; i++){
            if(mat[i][left]!=mat[i][right]){
                return false;
            }
        }
        left++;
        right--;
    }
    return true;
}

function checkRow(n,mat){
    var top =0; 
    var bottom = n-1;
    while(top<bottom){
        for(var i=0; i<n; i++){
            if(mat[top][i]!=mat[bottom][i]){
                return false;
            }
        }
        top++;
        bottom--;
    }
    return true;
}
