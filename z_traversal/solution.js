function zTraversal(N, arr) {
    var bag = "",
    for (var i = 0; i < N; i++) {
        bag = bag + arr[0][i] + " ";
    }
    for (var i = 1; i < N; i++) {
        bag = bag + arr[i][N - 1 - i] + " ";
    }
    for (var i = 1; i < N; i++) {
        bag = bag + arr[N - 1][i] + " ";
    }
    console.log(bag)
}