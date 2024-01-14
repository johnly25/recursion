function mergeSort(array) {
    if (array.length == 1) {
        return array;
    }

    let array1 = array.slice(0, array.length / 2);
    let array2 = array.slice(array.length / 2, array.length);

    array1 = mergeSort(array1);
    array2 = mergeSort(array2);

    return merge(array1, array2);
}

function merge(leftArray, rightArray) {
    let array = [];

    while (leftArray.length > 0 && rightArray.length > 0) {
        if(leftArray[0] > rightArray[0]) {
            array.push(rightArray[0]);
            rightArray.shift();
        } else {
            array.push(leftArray[0]);
            leftArray.shift();
        }
    }

    while(leftArray.length > 0) {
        array.push(leftArray[0]);
        leftArray.shift();
    }

    while(rightArray.length > 0) {
        array.push(rightArray[0]);
        rightArray.shift();
    }

    return array;
}

let arr = [15,24,8,3,5,2,1];

console.log(mergeSort(arr));