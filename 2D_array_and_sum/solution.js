function twoArrayAndSum(n, m, matrix, s){
    var count = 0;
    for (var i=0; i<n; i++) {
        for (var j=0; j<m; j++) {
            if (j<m-2) {
                var temp = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2]
                if (temp == s) count++;
            }
            if (i<n-2) {
                var temp = matrix[i][j] + matrix[i+1][j] + matrix[i+2][j]
                if (temp == s) count++;
            }
            if (i<n-2 && j<m-2) {
                var temp = matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2]
                if (temp == s) count++;
            }
            if (i>=2 && j<m-2) {
                var temp = matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2]
                if (temp == s) count++;
            }
        }
    }
    console.log(count)
}