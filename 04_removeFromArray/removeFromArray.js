const removeFromArray = function(arr, ...restParam) {
    let newArr = [];
    arr.forEach((item) => {
        if(!restParam.includes(item)) {
            newArr.push(item);
        }
    })
    return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
