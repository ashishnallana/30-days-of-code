function processData(input) {
    //Enter your code here
    input = input.split("\n");

    for (let i = 1; i < input.length; i++) {
        let split = input[i].split("");


        var even = "";
        var odd = "";



        for (let j = 0; j < split.length; j++) {
            if (j % 2 == 0) {
                even += split[j];
            } else {
                odd += split[j];
            }
        }

        console.log(even + " " + odd);
    }

}
