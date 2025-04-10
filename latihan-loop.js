for (let i = 1; i <= 100; i++) {
    let notPrime = false;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            notPrime = true;
            break;
        }
    }
    if (notPrime) {
        console.log(i);
    }
}