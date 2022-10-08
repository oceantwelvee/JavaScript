const helpers = {
    getValue: function(array, key) {
        const res = [];
        for(let i = 0; i < array.length; i++) {
            res.push(array[i][key])
        }
        return res;
    },
    mapArray: function(array,key) {
        let result = [];
        for(let i = 0; i < array.length; i++) {
            result.push(array[i][key]);
        }
        return result;
    },
    p: 5566
}

export const getValue = helpers.getValue;
export const mapArray = helpers.mapArray;
export const p = helpers.p;