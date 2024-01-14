function fibs(number) {
    let array = [0, 1];
    if (number === 1) {
        return [0];
    } 
    if (number === 2) {
        return array;
    }
    for (let i = 0; i < number - 2; i++) {
        let number = array[i] + array[i + 1];
        array.push(number);
    }
    return array;
}

function fibsRec(n) {
    if (n == 1) return [0];
    if (n == 2) return [0,1];
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];

}
