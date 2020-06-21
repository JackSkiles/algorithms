

function factorNum(num){
    if (num === 1){
        return 1;
    }
    return num * factorNum(num - 1)
}

console.log(factorNum(4));