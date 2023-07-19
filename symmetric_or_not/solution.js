function symmetricOrNot(n, mat) {
    // write code here
   var main_flag = true
    var x = 0 ; 
    var y = n-1;
    while(x<y){
        var flag = false;
        for(var i=0; i<n; i++){
            if(mat[i][x]==mat[i][y]&&mat[x][i]==mat[y][i]){
                flag = true
            }
            else{
                flag = false
               main_flag = false
               console.log("NO")
                return
            }
           
        }
        if(main_flag == true&&flag == true){
            x++;
            y--;
            
        }
        
    }
    if(main_flag == true){
        console.log("YES")
    }
   
}
