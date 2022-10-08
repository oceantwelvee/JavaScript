function getValues(array, key) {
    const res = [];
    for(let i = 0; i < array.length; i++) {
        res.push(array[i][key])
    }
    return res;
}