const socks = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
function pairs(arr){
    let socks = arr.length;
    let pair = 0;
    let pairArr = [];
    let nonPairs = [];
    arr.sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i <= socks; i++){
        pairArr = [];
        pairArr = arr.splice(0, 2)
        if(pairArr.length === 0){
          continue;
        }
        else if (pairArr[0] === pairArr[1]){
            pair += 1;
        }
        else {
            nonPairs.push(pairArr[0]);
            if (!pairArr[1]){
              continue;
            }
            nonPairs.push(pairArr[1]);
        }
        
        if (!arr.length){
            for(i = 0; i < nonPairs.length; i++) {
            if (nonPairs[i] === nonPairs[i + 1]){
              pair += 1;
            }
          }
          return pair;
        }
    }
    return pair;
}


console.log(pairs(socks));