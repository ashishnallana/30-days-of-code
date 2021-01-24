function main() {
    var n = parseInt(readLine());
    a = readLine().split(' '); // size n
    a = a.map(Number);
    // Write Your Code Here
    let numberOfSwaps = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - (1 + i); j++) {
            if (a[j] > a[j + 1]) {
                //swap variables
                //using destructuring method
                [a[j] , a[j+1]] = [a[j+1] , a[j]];
                numberOfSwaps++;
            }
        }
    }

    console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n - 1]}`);
}
