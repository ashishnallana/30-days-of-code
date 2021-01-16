function processData(input) {
    //Enter your code here
    input = input.split("\n");

    let inputs = parseInt(input[0]);

    let map = new Map();
    for (let i = 1; i <= inputs; i++) {
        map.set(input[i].split(" ")[0], input[i].split(" ")[1])
    }

    // console.log(map)

    for (let j = inputs + 1; j < input.length; j++) {
        if (map.get(input[j]) != undefined) {
            console.log(input[j] + "=" + map.get(input[j]));
        } else {
            console.log("Not found");
        }
    }


}
