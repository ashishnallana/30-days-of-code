function factorial(n) {
    if(n <= 1){
        return 1;
    } else{
        return n*factorial(n-1);
    }
}

// how this works

// factorial(5)
// 5*5-1 = 20
// 20*4-1 = 60
// 60*3-1 = 120
// 120*2-1(returns 1) = 120
