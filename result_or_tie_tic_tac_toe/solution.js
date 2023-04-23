function check_sym(matrix, symbol) {
    if (matrix[0][0]==symbol && matrix[0][1]==symbol && matrix[0][2]==symbol) {
        console.log(symbol);
    }
    else if (matrix[1][0]==symbol && matrix[1][1]==symbol && matrix[1][2]==symbol) {
        console.log(symbol);
    }
    else if (matrix[2][0]==symbol && matrix[2][1]==symbol && matrix[2][2]==symbol) {
        console.log(symbol);
    }
    else if (matrix[0][0]==symbol && matrix[1][0]==symbol && matrix[2][0]==symbol) {
        console.log(symbol);
    }
    else if (matrix[0][1]==symbol && matrix[1][1]==symbol && matrix[2][1]==symbol) {
        console.log(symbol);
    }
    else if (matrix[0][2]==symbol && matrix[1][2]==symbol && matrix[2][2]==symbol) {
        console.log(symbol);
    }
    else if (matrix[0][0]==symbol && matrix[1][1]==symbol && matrix[2][2]==symbol) {
        console.log(symbol);
    }
    else if (matrix[0][2]==symbol && matrix[1][1]==symbol && matrix[2][0]==symbol) {
        console.log(symbol);
    }
    else {
        return -1;
    }
}

function ticTacToe(matrix){
    //write code here
    if (check_sym(matrix, "x") == -1) {
        if (check_sym(matrix, "o") == -1) {
            console.log("Tie");
        }
    }
  
}

const matrix = [
    ['x', 'o', 'x'],
    ['o', 'x', 'x'],
    ['o', 'o', 'o']
]

ticTacToe(matrix)