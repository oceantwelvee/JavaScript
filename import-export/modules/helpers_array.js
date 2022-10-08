export function mapArray(array,key) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(array[i][key]);
    }
    return result;
}

export function getValue(array, key) {
    const res = [];
    for(let i = 0; i < array.length; i++) {
        res.push(array[i][key])
    }
    return res;
}