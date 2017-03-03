function isPrime(num) {
    var divider = 0;
    var sqr = Math.abs(num) * Math.abs(num);

    for(var i=0; i < sqr; i++){
        if(Math.abs(num) % i === 0){
            divider++
        }
    }
    return divider === 2
}