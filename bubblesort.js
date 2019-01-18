function swap (currNum, nextNum) {
    return [nextNum,currNum]
}

function bubbleSort(array) {
    const arr = array.slice()
    for (let i = 0; i < array.length-1; i++) {
        let currNum = array[i];
        let nextNum = array[i+1];
        if (currNum > nextNum) {
            let swappedArr = swap(currNum, nextNum)
            array[i] = swappedArr[0];
            array[i+1] = swappedArr[1];
        }
    }
    if (arr.every((element, ind) => element === array[ind])) return array
    else {return bubbleSort(array)}
}

bubbleSort([4,3,2])


