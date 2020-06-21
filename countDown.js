

function countDown(num){
    if(num === 0){
        return 0;
    }
    console.log(num)
    return num + countDown(num-1);
}

console.log(countDown(5));