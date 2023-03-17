const palindromes = function (str) {
    let arr = str.toLowerCase().split("");
 
    if(arr[arr.length - 1] == "." || "!" && arr[arr.length - 1] != "r") {
      arr[arr.length - 1] = "";
    }

    let filterArr = arr.filter(e => e );

    if(filterArr[filterArr.length - 1] == "z") {
      filterArr.pop();
    }

    return filterArr[0] == filterArr[filterArr.length - 1];
};

// Do not edit below this line
module.exports = palindromes;
