

function sumNum(num){
    if(num === 1){
        return 1;
    }
    return (num + (num - 1)), num + sumNum(num - 1);
}

console.log(sumNum(13));