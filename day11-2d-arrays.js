function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }


    var biggestSum = -63;
    var sum = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if (sum > biggestSum) {
                biggestSum = sum;
            }
        }
    }

    console.log(biggestSum);


}
