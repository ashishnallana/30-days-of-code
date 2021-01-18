function main() {
    const n = parseInt(readLine());
    let array = [];
    let count = 0;
    let binary = n.toString(2).split("");
    binary.forEach((number , index) => {
        if(number == 1){
            count++;
            if(index == binary.length-1){
                array.push(count);
            }
        } else{
            array.push(count);
            count = 0;
        }
    });

    const ans = array.sort((a,b) => {
        return b-a;
    })[0];

    console.log(ans);
}
