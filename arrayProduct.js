
testArr = [1, 2, 3, 4, 5]

function product(arr){
    if (arr.length === 0) return [];
    if (arr.length === 1) return arr[0];

    return arr.splice(0,1) * product(arr);
}


console.log(product(testArr));