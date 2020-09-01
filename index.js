function findMinAndRemove(array){
    let min = array[0]
    let index = 0
    for (let i=1; i<array.length; i++) {
        min = array[i] > min ? min : array[i]
        index = array[i] > min ? index : i
    }
    array.splice(index, 1)
    return min
}

function selectionSort(array){
    let sortedArray = []
    while (array.length != 0) {
        sortedArray.push(findMinAndRemove(array))
    }
    return sortedArray
}
