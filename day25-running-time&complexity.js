function processData(input) {
   var inputArray = input.split('\n').map(Number);
        
    // removes the first element that is not required below
    inputArray.shift();
    
    inputArray.forEach(function(element) {
         if (isPrime(element)) {
            console.log('Prime');
         } else {
            console.log('Not prime');
         }
    });
} 

function isPrime(number) {
    var range = Math.floor(Math.sqrt(number));
    if (number < 2) {
        return false;
    } else if (number === 2) {
        return true;
    }

    for (var i = 2; i <= range; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
