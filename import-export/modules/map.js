function map(array,key) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(array[i][key]);
    }
    return result;
}

export default map;