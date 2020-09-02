function findMinAndRemove(array, start = 0){
    let minIx = start;
    for (let i = start; i < array.length; i++) {
        if (array[i] < array[minIx]) {
            minIx = i;
        }
    }
    return array.splice(minIx, 1)[0];
}

function selectionSort(array){
    for (let i = 0; i < array.length; i++) {
        array.splice(i, 0, findMinAndRemove(array, i));
    }
    return array;
}
